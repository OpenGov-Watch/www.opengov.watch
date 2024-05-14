# Structure your Project

Every project is different and often requires a unique project plan. At the same time, OpenGov needs to be able to judge projects quickly and accurately. There we have developed certain convention for how a good project proposal should be structured. This article will provide you with guidance on how to best write a proposal. Copy the parts that make sense for your project.

## Overview: Milestones, Timeline, Budget
Three essential components for communicating your project is milestones, timeline, and budget.
- **Milestones:** For projects that span longer than just a weeks, it typically makes sense to structure them into milestones. This can either be iterate feature/content milestones or follow the [waterfall model](https://en.wikipedia.org/wiki/Waterfall_model)
- **Timeline:** What is the timeline for the project and the milestones. When is the final delivery expected?
- **Budget:** How much does the whole project and each milestone cost?

Together, these pieces of information should be represented in a single table.


| Milestone | Description | Timeline | Budget |
| --- | --- | --- | --- |
| M1 - Research | gather additional information about the problem | 1 month | 10,000 USD |
| M2 - Implementation | build the solution | 3 months | 30,000 USD |
| M3 - Rollout | deploy the solution | 2 weeks | 5,000 USD |
| --- | --- | --- | --- |
| | **TOTAL** | **4.5 months** | **45,000 USD** |

### Timeline
Project time is measured by 2 KPIs:
- Hours: This is the hours of work it takes to get the thing done. Not every project makes it neccessary or possible to determine the person hours for a project.
- Duration: Multiple people or a single person with half their attention can work on a project at a given time. Therefore it is neccessary to state what the duration of the whole project or a single phase is. 

A unit that is often used is FTE: Full-time equivalents. This signals how many people are working on a project at a given time. A FTE typically is assumed to work 40 hours per week. A FTE is usually considered to be working 160 hours/month (with holidays/vacation) or 176 hours/month (without)

Since it can be neccessary to take breaks between phases or develop some phases at half speed (e.g. you only have 0.5 FTEs available), communicating the expected duration of the whole project is also neccessary.

### Budgets
Budgets contain labor and other costs. Labor is typically measured in USD/hour (or another currency). You should consider all relevant costs and add them up together. If your request is in DOT, perform the conversion into DOT at the very end of the calculation.

## Breakdowns
To give evaluators insights into how the big plan breaks down, you can provide several different views on the project

### Breakdown: Milestones by Waterfall Model
For a project following the waterfall model, you might encounter these phases:

1. Research phase:
    1. Research - gather additional information about the problem
    2. Stakeholder interviews - gather sinsights & feedback from involved parties
    3. Prototyping - develop prototypes to understand if the problem can be solved as expected
2. Work phase: The actual work tasks can be very unique and vary significantly depending on the project category.
    1. Implementation
    2. Documentation
    3. Testing
3. Delivery phase:
    1. Audits - analyze the research data and existing documentation
    2. Deliverables - package the project deliverables
    3. Final report - compile a series of metrics to display how successful the project was and lessons learned
    4. Launch/publish/handover the finished project
    5. Closing the project - communicating with the stakeholders and providing the Final report

An example Milestone table for such a project could look like this:

| Milestone | Task | Description | Hours |
| --- | --- | --- | --- |
|  **M2 - Implementation** |
| | Environment Setup | seting up the development environment, Github, Website etc | 16
| | Application Bootstrap | simple application template with backend and frontend stubs | 24
| | Database Model | Model of Blocks, Extrinsics, and Events | 40 
| | Backend Logic + API | connecting to RPCs, scraping data, transformation | 120
| | Frontend | UI that works against the API | 100
| | Business Logic | definition of several views, screens, etc | 80
| | Unit Tests | test coverage for all functions of the business logic | 40
| | Integration Testing | manual end-to-end testing + test book | 40
| | Documentation | code docs | 20

### Breakdown: Budget by Role
Breaking down a project by role makes sense when many different roles participate

| Milestone | Engineer | Editor | PM | Sum hours | 
| --- | --- | --- | --- | --- |
| M1 - Research | 20h | 60h | 40h | 120h |
| M2 - Implementation | - | 30h | - | 30h |
| M3 - Rollout | 10h | 40h | 10h | 60h |
| **TOTAL TIME** | | | | **210h**

Obviously you can also break a milestone down by role for each task.

Since different roles usually can cost different amounts, you might want to give the individual pricing

| Milestone | Role A | Role B | Role C | SUM HOURS | 
| ---                 | --- | --- | --- | --- |
| M1 - Research       | 100h | 200h | 0h   | 300h |
| M2 - Implementation | 200h | 50h  | 0h   | 250h |
| M3 - Rollout        | 50h  | 0h   | 50h  | 100h |
| **TOTAL HOURS**     | **350h** | **250h** | **50h**  | **650h**
| Hourly rate         | $50  | $100 | $150 | 
| **TOTAL USD**       | **$17,500** | **$25,000** | **$7,500** | **$50,000**