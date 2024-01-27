import pandas as pd
import os

def process_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    # Remove columns that are completely empty
    df_cleaned = df.dropna(axis=1, how='all')
    
    # Cleanup the dataframe
    df_cleaned["Index"] = df_cleaned["Index"].str.replace("#", "")
    df_cleaned.drop("Propose Time", axis=1, inplace=True, errors='ignore')
    df_cleaned["Status"] = df_cleaned["Status"].str.replace("Awarded\n", "")
    
    # Split the "Value" column into "KSM" and "USD"
    df_cleaned["KSM"] = df_cleaned["Value"].str.split("\n").str[0]
    df_cleaned["USD"] = df_cleaned["Value"].str.split("\n").str[-1]
    df_cleaned.drop("Value", axis=1, inplace=True)
    
    # Replace commas with dots and dots with commas
    df_cleaned["KSM"] = df_cleaned["KSM"].str.replace('.', '#').str.replace(',', '.').str.replace('#', ',')
    df_cleaned["USD"] = df_cleaned["USD"].str.replace('.', '#').str.replace(',', '.').str.replace('#', ',')
    
    # Convert KSM and USD columns to numbers
    df_cleaned["KSM"] = df_cleaned["KSM"].str.replace(',', '').astype(float)
    df_cleaned["USD"] = df_cleaned["USD"].str.replace('≈ \$', '').str.replace(',', '').astype(float)
    
    # Rename "Status" to "Awarded" and only keep the date
    df_cleaned.rename(columns={"Status": "Awarded"}, inplace=True)
    df_cleaned["Awarded"] = df_cleaned["Awarded"].str.split().str[0]
    
    # Reorder the columns
    df_final = df_cleaned[["Index", "Awarded", "KSM", "USD", "Beneficiary", "Description"]]
    
    # Remove rows where all columns except "Description" are NaN
    df_final = df_final.dropna(subset=["Index", "Awarded", "KSM", "USD", "Beneficiary"], how="all")
    
    return df_final

def create_links_markdown_updated(df, output_path, subsquare_template, polkassembly_template):
    with open(output_path, 'w') as md_file:
        for beneficiary, group in df.groupby('Beneficiary'):
            # Add new columns with links
            group["Subsquare"] = group["Index"].apply(lambda x: f"[View on Subsquare]({subsquare_template}{x})")
            group["Polkassembly"] = group["Index"].apply(lambda x: f"[View on Polkassembly]({polkassembly_template}{x})")
            
            # Replace "|" with "-" in the "Description" column
            group["Description"] = group["Description"].str.replace("|", "-")
            
            # Sort the 'Awarded' column within each group
            sorted_group = group.sort_values(by="Awarded")
            
            # Format the KSM and USD columns
            sorted_group["KSM"] = sorted_group["KSM"].astype(int).apply("{:,}".format)
            sorted_group["USD"] = sorted_group["USD"].astype(int).apply("{:,}".format)
            
            md_file.write(f"## {beneficiary}\n\n")
            md_file.write(sorted_group.drop('Beneficiary', axis=1).to_markdown(index=False))
            md_file.write("\n\n")

# Example usage:
file_path = "/path/to/your/spreadsheet.xlsx"  # Replace this with your file path
sample_df = pd.read_excel(file_path)
processed_df = process_dataframe(sample_df)

# Set the link templates
subsquare_template = "https://polkadot.subsquare.io/treasury/proposal/"
polkassembly_template = "https://polkadot.polkassembly.io/treasury/"

# Define the output directory and ensure it exists
output_dir = "/path/to/your/output_directory"  # Replace this with your desired output directory
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Define the markdown file path
links_markdown_file_path = os.path.join(output_dir, "grouped_by_beneficiary_links.md")

# Create markdown with links grouped by beneficiary using the updated function
create_links_markdown_updated(processed_df, links_markdown_file_path, subsquare_template, polkassembly_template)
