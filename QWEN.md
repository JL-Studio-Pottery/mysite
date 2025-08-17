# Repo Specific Data

Make a testing Testing framework
- This will allow test driven developent to you use the tests to ensure the webiste is function. You run the test after you make a chage 

Use relative units
Make dynamx usnits only
- Make it loop good on screens of all sizes

Okay we are not working on a potter webiste for a client. There are not gh issues. We 
need to clean up this site and ensure it is following best practices. Lets first start
my using the images in the assets folder and use the in the website. Currently        \nplaceholder images are being used 

**UPDATE 2025-08-17**: All placeholder images have been replaced with local assets from the assets folder.

Ensure all images have their location metadata scraped 
Ensure all images/fonts/assets are optmized for modern web standards. e.g using webp, e.g caching data

**UPDATE 2025-08-17**: All images are in WebP format (except SVG) and metadata has been stripped.



# Workflow

**PRemise** High level workflow This is the high-level strucuter you will folow every work session** This framework applies both macro and micro promlems



1. Identify Symptoms        
2. Determine Diagnosis      
3. Assess Solutions
4. Implement Solution
5. Review
6. Submit



### 1. Planning & Staging

Break complex work into 3-5 stages. Document in `IMPLEMENTATION_PLAN.md`:

## Stage N: [Name]
**Goal**: [Specific deliverable]
**Success Criteria**: [Testable outcomes]
**Tests**: [Specific test cases]
**Status**: [Not Started|In Progress|Complete]
```
- Update status as you progress
- Remove file when all stages are done

### 2. Implementation Flow

1. **Understand** - Study existing patterns in codebase
2. **Test** - Write test first (red)
3. **Implement** - Minimal code to pass (green)
4. **Refactor** - Clean up with tests passing
5. **Commit** - With clear message linking to plan

### 3. When Stuck (After 3 Attempts)

**CRITICAL**: Maximum 3 attempts per issue, then STOP.

1. **Document what failed**:
   - What you tried
   - Specific error messages
   - Why you think it failed

2. **Research alternatives**:
   - Find 2-3 similar implementations
   - Note different approaches used

3. **Question fundamentals**:
   - Is this the right abstraction level?
   - Can this be split into smaller problems?
   - Is there a simpler approach entirely?

4. **Try different angle**:
   - Different library/framework feature?
   - Different architectural pattern?
   - Remove abstraction instead of adding?
## Identify Symptoms: Step 1

**Goal**
- Recognize the issue the creator is experiencing.

Process:
- Determine what issue to work on.
- Gather initial data from the source (e.g., GitHub issue, logs, reports).

Output:
- A clear statement of the observed symptoms.
- References to relevant data files or issues.
# Determine Problem: Step 2

Goal:
- Understand the root cause of the issue.

Process:
- Check for misconfigurations, logical errors, typos, or missing resources.
- Use available tools and external references to gather more data.
- Document observations and hypotheses.

Output:
- A prioritized list of possible causes.
- Supporting evidence and references.
## Assess Solutions: Step 3

Goal:
- Evaluate potential solutions to the diagnosed issue.

**Decision Framework**: When multiple valid approaches exist, choose based on:
1. **Testability** - Can I easily test this?
2. **Readability** - Will someone understand this in 6 months?
3. **Consistency** - Does this match project patterns?
4. **Simplicity** - Is this the simplest solution that works?
5. **Reversibility** - How hard to change later?

Process:
- List possible fixes or interventions.
- Consider trade-offs (speed, safety, accuracy, complexity).
- Select the most promising solution.

Output:
- Recommended solution with rationale.
- Contingency plan if first attempt fails.
## Implement Treatment: Step 4

Goal:
- Apply the chosen solution in a controlled environment.

Process:
- Create a dedicated workspace or branch (e.g., GitHub branch).
- Implement changes step by step.
- Document actions taken.

Output:
- Solution implemented and tested.
- Notes on any deviations from plan.
Review and Reflect: Step 5 

Goal:
- Verify effectiveness and extract lessons learned.

Process:
- Test solution objectively using logs, metrics, or reproducible checks.
- Reflect on what worked, what didn’t, and why.
- Update workflow or documentation if needed.

Output:
- Confirmation of issue resolution.
- Recommendations for future improvements.

Next Step:
- If successful: Submit
- If unsuccessful: Go back steps
### Definition of Done

- [ ] Tests written and passing
- [ ] Code follows project conventions
- [ ] No linter/formatter warnings
- [ ] Commit messages are clear
- [ ] Implementation matches plan
- [ ] No TODOs without issue numbers
## GitHub Issue Protocol

**Purpose:**
When instructed to “check,” “fix,” or “monitor” GitHub issues, follow this protocol step-by-step.

---

### 1. View Available Issues

Run:

```shell
gh issue list
```

Example output:

```shell
Showing 26 of 26 open issues in name/repo

ID   TITLE                       LABELS                 UPDATED
#39  make foo                    enhancement            about 11 hours ago
#38  feat: add bar               feature                about 1 day ago
#37  bug: baz is not working     bug                    about 3 days ago
```

---

### 2. Select the Target Issue

**Priority Rules:**

1. If explicitly assigned an issue number — work on that issue.
2. If not assigned — review issue titles from `gh issue list` and choose the one you are most likely to resolve successfully.
3. Consider urgency (recently updated, blocking work, or tagged with urgent/bug).

---

### 3. View the Issue Details

Run:

```shell
gh issue view <ISSUE_NUMBER>
```

Replace `<ISSUE_NUMBER>` with the actual number, e.g.:

```shell
gh issue view 39
```

This will display:

* Full title and description
* Labels
* Comments and discussion
* Linked pull requests or commits (if any)

---

### 4. Proceed With Action

After gathering details, you can:

* Begin working on a fix
* Post a status update
* Assign or reassign the issue if needed
* Close the issue if resolved
## Defining an Improvement

When updating or fixing code, follow these rules to determine what qualifies as an **improvement**.

---

### ✅ What *is* an Improvement

* **Use DRY principles**
  Reduce repetition in code by reusing logic, creating functions, or refactoring duplicated blocks.

* **Replace outdated patterns/APIs with modern alternatives**
  Adopt newer language features, syntax, or APIs that are actively supported and improve readability, performance, or maintainability.

* **Increase resource efficiency**
  Optimize memory usage, reduce CPU load, and avoid unnecessary processing.
  *Example:* Implement lazy loading for plugins or modules.

* **Improve performance**
  Enable parallel or concurrent processing when appropriate (e.g., multi-threading, async execution).

---

### ❌ What *is not* an Improvement

* Making code **unnecessarily complex or verbose** for minimal or no real benefit.
* Adding **redundant comments** that describe *what* the code does rather than *why* it’s written that way.
* Ignoring **established best practices** in the language, framework, or project.

---
## Philosophy

### Core Beliefs

- **Incremental progress over big bangs** - Small changes that compile and pass tests
- **Learning from existing code** - Study and plan before implementing
- **Pragmatic over dogmatic** - Adapt to project reality
- **Clear intent over clever code** - Be boring and obvious

### Simplicity Means

- Single responsibility per function/class
- Avoid premature abstractions
- No clever tricks - choose the boring solution
- If you need to explain it, it's too complex
### Test Guidelines

- Test behavior, not implementation
- One assertion per test when possible
- Clear test names describing scenario
- Use existing test utilities/helpers
- Tests should be deterministic

## Important Reminders

**NEVER**:
- Use `--no-verify` to bypass commit hooks
- Disable tests instead of fixing them
- Commit code that doesn't compile
- Make assumptions - verify with existing code

**ALWAYS**:
- Commit working code incrementally
- Update plan documentation as you go
- Learn from existing implementations
- Stop after 3 failed attempts and reassess

