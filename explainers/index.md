---
layout: page
title: Explainers
---

## Participate
- [Explainer Explainer issues](https://github.com/w3ctag/tag.w3.org/labels/explainer%20explainer)
- [GitHub
  repo](https://github.com/w3ctag/tag.w3.org/blob/main/explainers/index.md)
- [Explainer
  template](https://github.com/w3ctag/tag.w3.org/blob/main/explainers/template.md)

# Writing Effective Explainers for W3C TAG Review

Introduction:
Your explainer is a living document that describes the current state of your proposed web platform feature or collection of features. It serves as a means to communicate and facilitate multi-stakeholder discussions and consensus-building.

Key Components of an Explainer:

1. User-Facing Problem:
Clearly articulate the problem that your proposed feature aims to solve from the user's perspective.

2. Proposed Approach:
Explain the proposed solution or approach to addressing the identified problem.

3. Practical Use Cases:
Demonstrate how the proposed solution can be practically applied to address various use cases through the inclusion of example code snippets.

4. Discussion Venues:
Provide links to external venues such as mailing lists, pull requests, or issue threads where interested readers can catch up on discussions related to the proposed feature.

5. Considered Alternatives:
Discuss alternative approaches that have been considered and provide reasons for not choosing them. This helps reviewers and stakeholders understand the decision-making process.

6. Accessibility, Security, and Privacy Considerations:
Highlight any accessibility, security, and privacy implications that have been taken into account during the design process.

7. High-Level Overview for Specification Writing:
Once there is reasonable consensus on the approach and high-level design, the explainer can serve as a guide for writing the specification, providing an overview of the feature and the user need it fulfills.

8. Author-Facing Documentation:
After the spec is written and the feature is implemented, the explainer can be used as a basis for creating documentation that helps authors understand and utilize the new feature effectively.

Examples of Good Explainers:
- [Service Workers](https://github.com/w3c/ServiceWorker/blob/master/explainer.md)
- [`paymentRequest`](https://github.com/zkoch/paymentrequest/blob/gh-pages/docs/explainer.md)
- [Web Share](https://github.com/WICG/web-share/blob/master/docs/explainer.md)
- [Viewport API](https://github.com/WICG/ViewportAPI/blob/gh-pages/README.md)
- [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
- [Intersection Observer](https://github.com/w3c/IntersectionObserver/blob/master/explainer.md)
- [Declarative Shadow DOM](https://github.com/mfreed7/declarative-shadow-dom/blob/master/README.md)
- [Autoplay Policy Detection](https://github.com/w3c/autoplay/blob/main/README.md)

Tips for Writing Effective Explainers:

1. Be Concise:
Since explainers are likely to be read by various stakeholders, strive to keep them brief and easy to read.

2. Clarify the User Need:
Emphasize the end-user need that your proposed feature addresses, even if the connection is complex. Provide explanations that help readers understand the significance.

3. Maintain Readability:
Write in a concise and skimmable manner. Use bulleted lists to present information clearly. Employ bold formatting to highlight key points.

4. Use Code Examples and Diagrams:
Whenever possible, use code examples to demonstrate your design instead of relying solely on prose. Consider including diagrams to aid understanding. Remember to provide text alternatives for images.

5. Simplify Language:
Keep the language as simple as possible to accommodate readers who may not be native English speakers or who may be reading under time constraints.

6. Be Kind and Considerate:
Show kindness to your readers, as you would like them to reciprocate. Respect their time and effort.

7. Distinguish Web Context and Proposed Changes:
Help readers differentiate between the current state of the web and the proposed changes. Provide clear context for the proposal, explaining necessary details about the existing web platform.

8. Document Considered Alternatives:
Keep track of and explain alternative approaches that were considered but not chosen. This helps reviewers understand the decision-making process and avoids redundant questions.

9. Markdown Format for Transparency and Likability:
Provide your explainer as a markdown file alongside the specification. This approach promotes transparency and accessibility, making it easier for readers to access and navigate the content and making it easier to refer to sections of the document during any discussion in the design review issue.

10. Encourage Participation:
Direct readers to relevant participation forums, issue trackers, or other communication channels to encourage their involvement and feedback.

By following these guidelines, you can create clear, concise, and accessible explainers that effectively communicate your proposed web standards specifications for W3C TAG review.
