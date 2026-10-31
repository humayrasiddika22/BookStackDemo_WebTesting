# BookStack Demo WebTesting

## Test Plan

**Project Name:** BookStack Demo WebTesting  
**Application Under Test:** BookStack Demo  
**Application URL:** https://demo.bookstackapp.com  
**Testing Approach:** Manual Functional Testing and End-to-End Automation Testing  
**Automation Framework:** Playwright with JavaScript    
**Document Version:** 1.0  

---

## Introduction

This test plan defines the scope, objectives, strategy, resources and execution approach for testing the BookStack Demo web application. The project focuses on validating the login process and a complete book-and-shelf management workflow through manual functional testing and automated end-to-end testing.

The selected workflow includes logging in, creating two books, creating a shelf, adding the books to the shelf, searching for the shelf from the homepage, reviewing its contents and deleting the shelf.

The plan establishes a structured approach to evaluating application behavior, identifying defects, maintaining test evidence and reporting testing outcomes.

## Objectives

The primary objectives of this project are to:

- Verify that admin can log in with valid credentials and that invalid login attempts are handled appropriately.
- Validate book creation and shelf creation functionality.
- Verify that books can be added to the intended shelf.
- Confirm that the homepage search can locate the newly created shelf.
- Verify that the shelf displays the expected information and associated books.
- Validate shelf deletion and the resulting application behavior.
- Identify and document reproducible functional defects.
- Evaluate the selected workflows through manual and automated testing.
- Produce clear, traceable test documentation and execution reports.

## Scope of Testing

### In Scope

The following functionalities are included in this project:

1. **Login and Authentication**
   - Valid login credentials.
   - Invalid or incomplete login inputs.

2. **Book Management**
   - Creation of two books with distinct test data.
   - Validation of book information.
   - Verification that the created books are available for shelf management.

3. **Shelf Management**
   - Creation of a new shelf.
   - Addition of the two newly created books.
   - Verification that the correct books appear on the shelf.

4. **Homepage Search**
   - Searching for the newly created shelf.
   - Verifying relevant search results.
   - Opening and reviewing the intended shelf.

5. **Shelf Review and Deletion**
   - Verifying the shelf's displayed information and book contents.
   - Deleting the created shelf.
   - Verifying the deletion outcome.

6. **Testing and Reporting**
   - Manual functional test design and execution.
   - Positive, negative, boundary-value and edge-case testing.
   - Playwright-based end-to-end automation.
   - Defect reporting and test summary preparation.

### Out of Scope

The following areas are excluded unless the scope is formally expanded:

- Comprehensive security and penetration testing.
- Load, stress and performance testing.
- Cross-browser testing beyond the browsers selected for this project.
- Mobile-device compatibility testing.
- Testing unrelated BookStack modules and workflows.
- Backend implementation and source-code testing.

## Test Strategy

The project will follow a structured testing process consisting of planning, test design, execution, defect documentation, automation and reporting.

### Manual Functional Testing

Manual testing will be performed first to understand the application's behavior and validate the selected workflow. Each test case will contain a unique ID, title, preconditions, test steps, test data, expected result, actual result, execution status and relevant evidence where applicable.

### End-to-End Automation Testing

Playwright with JavaScript will be used to automate selected workflows. The automation suite will verify important user journeys through the application interface.
The planned automation workflow will have three stages:

1. Log in to the application.
2. Create two new books and a new shelf; add a book to the newly created shelf.
3. Search for the shelf from the homepage, review its contents and delete it.

Automation assertions will verify meaningful application outcomes, not merely whether buttons were clicked. Appropriate waiting strategies, identifiable test data and failure diagnostics will be used to improve reliability.

### Defect Reporting

Any defect reported must be personally reproduced and supported by evidence. Each defect report will include:

- Bug ID and title.
- Environment and relevant preconditions.
- Steps to reproduce.
- Expected result.
- Actual result.
- Severity and priority, where appropriate.
- Screenshot or other supporting evidence.
- Current status, if tracked.

### Test Summary Reporting

At the end of execution, the test summary will report manual and automation results. It will include test execution counts, pass/fail/blocked/not-executed statuses, defects identified, coverage observations, unresolved issues and remaining risks. No execution results or defect counts will be reported until they are supported by actual testing evidence.

## Test Environment and Tools

| Component | Planned Configuration |
|---|---|
| Application | BookStack Demo |
| Application URL | https://demo.bookstackapp.com |
| Operating System | Windows 11 |
| Browser | Desktop browser; Google Chrome |
| Automation Framework | Playwright |
| Programming Language | JavaScript |
| Test Case Documentation | Microsoft Excel |
| Test Plan and Reports | Markdown |
| Version Control | Git and GitHub |
| Evidence | Screenshots and recorded execution details, where useful |


## Test Data Management

Test data will be prepared before execution and used consistently across manual and automated testing.
The data will include:

- Valid and invalid login inputs appropriate to the available test environment.
- Two distinct book names and their required information.
- A unique shelf name.

## Entry Criteria

Testing may begin when:

- The application is accessible.
- Valid test credentials are available.
- The selected workflow can be explored.
- The test environment is sufficiently stable.
- The initial test plan and test-data approach are prepared.
- The required tools are installed or available.

## Exit Criteria

Testing may be considered complete when:

- Test cases have been designed and their execution status recorded.
- The planned automation scenarios have been implemented and executed.
- All observed failures have been investigated and documented appropriately.
- Reproducible defects have supporting evidence.
- Manual and automation results have been summarized in a summary document
- The project documentation has been reviewed for accuracy and consistency.

## Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Application downtime or access issues | Record the issue and resume testing when access is restored. |
| Existing data affects test results | Use unique test data and verify preconditions. |
| Dynamic UI behavior causes automation failures | Use reliable locators and appropriate Playwright waiting mechanisms. |
| Test data is accidentally deleted | Verify ownership and target details before destructive actions. |
| Automation scenarios depend on one another | Design clear setup, execution, and cleanup procedures. |
| Test results are incomplete or inconsistent | Maintain execution records and evidence in a consistent format. |
| A defect cannot be reproduced consistently | Repeat the steps, document observations and avoid unsupported conclusions. |

## Deliverables

The planned project deliverables are:

1. **Test Plan** — `Test_Plan.md`
2. **Manual Test Cases and Execution Results** — `Test_Cases.xlsx`
3. **Bug Report and Evidence** — `Bug_Report.xlsx` with supporting evidence
4. **Automation Scenarios and Justifications** — a Markdown document
5. **Playwright Automation Project** — JavaScript test scripts and necessary configuration
6. **Test Summary Report** — `Test_Summary.md`
7. **README** — project overview, scope, tools and repository navigation in Markdown document


