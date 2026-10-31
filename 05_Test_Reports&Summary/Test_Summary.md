# Test Summary of BookStack Demo WebTesting Project

**Project Name:** BookStack Demo WebTesting  
**Application Under Test:** BookStack Demo  
**Application URL:** https://demo.bookstackapp.com  
**Testing Approach:** Manual Functional Testing and End-to-End Automation Testing   
**Document Version:** 1.0  

---

## Project Overview

This project focuses on functional white box testing of the BookStack Demo web application through manual testing and Playwright automation. The main objective is to evaluate the application's core functionalities, identify potential defects and verify important user workflows.

## Testing Activities

### Test Planning

Prepared a test plan defining the testing scope, objectives, approach, test scenarios and execution process.

### Manual Testing

Designed and executed 30 test cases covering:

- Positive Testing
- Negative Testing
- Boundary Value Testing
- Edge Case Testing
- Data Integrity Testing
- Error Handling Testing

### Test Automation

**Selected Automation Scenarios:**

1. **Login Functionality:** Verify that a user can successfully log in with valid credentials and access the application.
2. **Book and Shelf Management:** Verify that books can be created, a shelf can be created and the books can be added to that shelf.
3. **Shelf Search and Verification:** Verify that a created shelf can be found through the homepage search and that its associated books are displayed correctly.

**Why These Scenarios Were Selected for Automation:**

These scenarios represent important and frequently used application workflows. Automating them helps reduce repetitive manual testing, improves test execution efficiency and ensures consistent validation of critical functionalities. It also helps identify issues when changes are introduced to the application.

## Test Execution Summary

| Testing Type       | Total | Passed | Failed |
| ------------------ | ----: | -----: | -----: |
| Manual Testing     |    30 |     28 |      2 |
| Automation Testing |     6 |      6 |      0 |

## Overall Conclusion

This project combines test planning, manual functional testing, defect reporting and end-to-end test automation. Manual testing helps evaluate different application behaviors and identify potential defects, while Playwright automation helps validate critical user workflows consistently. Together, these activities provide a structured approach to assessing the application's functionality and reliability.


