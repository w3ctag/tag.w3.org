---
layout: page
title: Design reviews
lead: "How we operate when carrying out a design review"
---

## Introduction

An important function of the TAG is in providing [design review](https://github.com/w3ctag/design-reviews), for proposed changes to the web.

Authors of new proposals can [ask the TAG to review](https://github.com/w3ctag/design-reviews/issues/new/choose) a proposal or to resolve a technical dispute.

This document describes how the TAG handles these requests.

## Overview

Once a request is made, we periodically triage new issues and make assignments.

Review is performed both synchronously in calls, and asynchronously, depending on the complexity of a review request.  Sometimes we invite the requestor or another expert from the wider community to discuss something with us on a call.

We track the status of review requests with issue labels.  Labels describe how we intend to conduct a review, who we believe is responsible for any outstanding actions, and any resolution to the review.

During a review, we my use the issue thread to ask questions, make suggestions, and report our current thinking. 
We also update the issue labels, milestones, and assignees as the review progresses. 
Other stakeholders may also update the thread with additional information if they think it will help the review.

When the review is complete, we will close the issue with a concluding comment, and add a label that describes the disposition of the review.

## Making a request

We provide an issue template for new review requests, and all review requests **must** provide [an explainer](/explainers/).

Please make it clear in your issue description:

* at which stage the feature is (eg. if this is an early review, or part of horizontal review for work that intends to become a W3C Candidate Recommendation);
* if you are opening an issue to give the TAG visibility of some activity (an "FYI");
* if the review is of a minor change to an existing specification which you think can benefit from TAG review;
* if there are any particular topics, questions or areas you are seeking input on.

## Preparing to review

### Triage

First, we check all relevant information is included, that the explainer is in sufficient detail and the correct format, that all required fields in the issue template have been filled in. If not, we will ask the requestor to complete this before we proceed further.

We apply **labels** according to the following, to help us decide how to proceed with a review:

* Any deadlines in the request.
* At which **stage** the proposal has come in:
    * horizontal review from a WG
    * early review from a CG
    * early review from a browser process
    * request from a WG that is not part of HR
* The **size** of the review:
    * A complex domain?
    * A small delta?
    * Major gaps in the proposal?
    * Contentious issues that need to be resolved?
* What should the **primary area** of focus be?
    * API design
    * Security
    * Privacy
    * Accessibility
    * Internationalisation
    * Web architecture

During triage, we might decline a request for any reason (see below).
For reviews that we accept, we will **label** review requests with a _mode_:

* `mode: async`: can be done asynchronously by one or two people for each area. (Also known as 'fast-track'.)
* `mode: breakout`: should be scheduled to a breakout for time-limited discussion.
* `mode: extra`: needs a dedicated session/breakout; may need external input.
* `mode: plenary`: escalation: needs whole TAG input.

The mode may change as a review progresses and new information comes to light, particularly as different areas are reviewed in more depth. For instance, `mode: async` may be appropriate for the API design, but the issue may be changed to `mode: extra` for privacy review if that seems necessary.

**Milestones** are used to denote the week of a breakout in which we will next discuss the issue, or the deadline for asynchronous work to be done by the assignees. We do our best to address the issue in the week of the milestone assigned, and to be realistic about when we can respond, but sometimes requests must be rescheduled.

### Prioritisation

When prioritising issues to work on, we:

* Prioritise horizontal review, and requests from WGs for REC-track documents.
* Pay attention to deadlines, especially if they are part of the REC process.
* Prioritise proposals with a clear path to standardisation, including multiple implementations.
* Prioritise based on an assessment of impact, preferring proposals where review will add more value.

### Review areas

It is usually best to review new features/specifications/proposals with expertise from several different areas.

We do this by passing a review between different TAG members, depending on the area they are best equipped to cover. We use labels to indicate the status of each part of the review (eg. `API review: pending` / `API review: complete`). A review is complete when all areas have been marked as complete (or not applicable).

Broadly, the areas we cover most commonly are:

* Web architecture
* API Design
* Security
* Privacy
* Accessibility
* Internationalisation

**API design** is essentially review in line with the [design principles](https://www.w3.org/TR/design-principles/).

**Security, Privacy, a11y and i18n** map to horizontal review groups. 
These should get picked up by such groups - our job is to reinforce any concerns, and flag anything resulting from the features' situation in the broader platform (eg. how it might interact with another feature that the HR group wasn't thinking/doesn't know about). 
For early reviews we may have to do more - but mainly prompting conversations with other HR groups, or flagging things for the requestor to look more closely at, rather than deep review.

**Web architecture**: how does it fit with the rest of the web platform? Implications for other existing or emerging features/areas? Is it consistent, technically and conceptually? Is it likely to be widely and consistently implemented? Any knock-on effects or opportunities from doing so? 

### Assignments

At least two TAG members are assigned for each _area_ of each review request. 
All assignees should know which part(s) of the review they are responsible for. 
Issues may be reassigned to different people as a review progresses.

## Conducting a review

We communicate the progress of our reviews by commenting in the issue thread, and updating labels. 

Depending on the complexity of a review, work may be done synchronously (on calls, typically with three or more TAG members present) or asynchronously (by one or two TAG members).

The complexity of a review usually depends on things like:

* Long-running, well understood area?
* Part of a set of connected proposals?
* Is there multi-stakeholder support? 
* Is there multi-implementer support?
* A long history of discussion/debate?
* New work? Experimental?
* Clear path to standardisation, or uncertain future?
* Has the requester asked us any questions?
* Have we seen this, or something like it, before?

### Synchronously (on calls)

We have a schedule of "breakout" calls each week across several timezones; TAG members are expected to attend at least two of these. The agenda is prepared in advance by the chairs, based on milestones assigned to design review issues, and the expected attendees of the breakouts. We use these for:

* Coworking on a review response; knowledge-sharing.
* High bandwidth discussion on complex topics.
* Discussion with external invitees.
* Reaching consensus on difficult issues prior to final review.
* Any other actions that cannot be performed asynchronously or independently.

We also have a "plenary" call every two weeks, which all TAG members are expected to attend. We use these for:

* Reporting on progress from breakouts or asynchronous working.
* Escalation of interesting or difficult issues that might need more discussion or awareness.
* Triaging new issues.
* Future agenda planning.

### Asynchronously

If any area of a review can be completed asynchronously, any individual TAG member with the appropriate domain expertise can do so. Most reviews will be conducted by at least two people; often one who is leading and another who is checking over comments before they are posted. This can happen in Slack, between breakouts.

We keep each other updated about any reviews that were completed asynchronously during our plenary calls.

## Resolutions

When we complete a review, we use labels to indicate the disposition of the review. The definitions of these are as follows.

* **Satisfied** This is a straightforward positive response.
* **Satisfied with Concerns** Positive, but would like to see either technical (e.g. API surface) or ecosystem (e.g. other implementor buy-in) changes. If the rebuttal results in no change in the substance of the proposal (feature champion rejects any suggested changes), this will get bumped down to one of the following negative resolutions, usually Unsatisfied.
* **Unsatisfied** Unsatisfied due to the technical artifact being reviewed not being of acceptable quality standards. This can result from either a fundamentally flawed technical proposal or a salvageable proposal where the rebuttal was disputed and remained unchanged at the end of the review.
* **Withdrawn** The review requester decided to withdraw the proposal during the review process.
* **Overtaken** External events mean that the work is no longer relevant (e.g., a competing proposal is now being pursued instead).
* **Validated** This is for early reviews, where we largely support the direction the work is going in.
* **Timed out** We have requested additional information and have not received it.
* **Lack of consensus** The TAG does not have an internal consensus on this proposal.
* **Decline** The TAG has declined to review this work.  This might be for any number of reasons, which will be explained in comments.  Possible examples are a lack of expertise, lack of time, a judgment that a review would not help improve the work, it's too early for a TAG review, or the work is out of scope.
* **Object** The TAG has resolved that this work would be detrimental or runs counter to [design](https://w3ctag.github.io/design-principles/), [privacy](https://w3ctag.github.io/privacy-principles/), [ethical](https://w3ctag.github.io/ethical-web-principles/), or other principles that have been established by the TAG or W3C. This is a strongly negative position and indicates that the TAG, as a body, will [oppose](https://www.w3.org/2023/Process-20231103/#registering-objections) the progression of work toward Recommendation.
