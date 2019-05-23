# Explainers

## Introduction

Your explainer is a living document that describes the current state of your proposed feature.

In the early phases of design, this may be as simple as a collection of goals and a sketch of one possible solution.

As your work progresses, the explainer can help facilitate multi-stakeholder discussion and consensus-building by making clear:

- the user-facing problem which needs to be solved
- the proposed approach to solving the problem
- the way the proposed solution may be used in practice to address the intended use cases, via worked example code
- any other venues (such as mailing list, pull requests or issue threads external to the location of the explainer) where the reader may catch up on discussions regarding the proposal
- the alternatives which have already been considered and why they were not chosen
- accessibility, security and privacy implications which have been considered as part of the design process

Once there is a reasonable amount of consensus on the approach and high-level design,
the explainer can be used to guide spec writing,
by serving as a high-level overview of the feature to be specified and the user need it serves.

Once the spec is written and the feature is shipped,
the explainer can then provide a basis for author-facing documentation of the new feature.

## Examples of good explainers

- [Service Workers](https://github.com/w3c/ServiceWorker/blob/master/explainer.md)
- [`paymentRequest`](https://github.com/zkoch/paymentrequest/blob/gh-pages/docs/explainer.md)
- [Web Share](https://github.com/WICG/web-share/blob/master/docs/explainer.md)
- https://github.com/WICG/ViewportAPI/blob/gh-pages/README.md  
  https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md  
  https://github.com/WICG/IntersectionObserver/blob/gh-pages/explainer.md (although this one includes IDL, which explainers should not)

## Tips for effective explainers:

Since your explainer may be referred to by a range of stakeholders,
not all of whom are likely to be highly motivated to spend a lot of time on it,
you should always try to keep your explainer as brief and easy to read as possible.

- Be clear about the **end-user** need, first and foremost.
- Keep your paragraphs and sentences short.
  - Paragraphs should contain one idea only, and likely shouldn't be more than a couple of sentences.
- Keep the language as simple as possible.
  - Not all readers will always be fluent English speakers. Even if they are, they may be reading your explainer while doing three other things, with a headache and a looming deadline. Be kind to your readers, since you probably want them to be kind to you.
- If you can and if it serves the document, be generous with diagrams.
  - A picture is, for most readers, much easier to process than a slab of text.
  - Always provide text alternatives for readers who may not be able to see images.
- As your design evolves, keep track of alternatives which have been considered.
  - You undoubtedly had reasons not to choose those alternatives, but reviewers and other stakeholders may not have that context.

## Explainer Template:

# [Title]

## Authors:

- [Author 1]
- [Author 2]

## Table of Contents [if the explainer is longer than one printed page]

[You can generate a Table of Contents for markdown documents using a tool like [doctoc](https://github.com/thlorenz/doctoc).]

## Introduction

[The "executive summary" or "abstract".
Explain in a few sentences what the goals of the project are,
and a brief overview of how the solution works.
This should be no more than 1-2 paragraphs.]

## Goals [or Motivating Use Cases, or Scenarios]

[What is the **end-user need** which this project aims to address?]

## Non-goals

[If there are "adjacent" goals which may appear to be in scope but aren't,
enumerate them here. This section may be fleshed out as your design progresses and you encounter necessary technical and other trade-offs.]

## [API 1]

[For each related element of the proposed solution - be it an additional JS method, a new object, a new element, a new concept etc., create a section which briefly describes it.]

```js
// Provide example code, not IDL, demonstrating the design of the feature.
```

[If you need to show how to get the feature set up (initialized, or using permissions, etc.), include that too.]

[If this is already specced, link to the relevant section of the spec.]

[If spec work is in progress, link to the PR or draft of the spec.]

## [API 2]

[etc.]

## Key scenarios

[Next, discuss the key end-user scenarios, showing how the author may address them:]

### Scenario 1

[Description of the end-user scenario]

```js
// Sample code demonstrating how to use this feature to address that scenario.
```

### Scenario 2

[etc.]

## Detailed design discussion

### [Tricky design choice #1]

[Talk through the tradeoffs in coming to the specific design point you want to make, hopefully...]

```js
// Illustrated with example code.
```

[This may be an open question,
in which case you should link to any active discussion threads.]

### [Tricky design choice 2]

[etc.]

## Considered alternatives

[This should include as many alternatives as you can,
from high level architectural decisions down to alternative naming choices.]

### [Alternative 1]

[Describe an alternative which was considered,
and why you decided against it.]

### [Alternative 2]

[etc.]

## Stakeholder Feedback / Opposition

[Implementors and other stakeholders may already have publicly stated positions on this work. If you can, list them here with links to evidence as appropriate.]

- [Implementor A] : Positive
- [Stakeholder B] : No signals
- [Implementor C] : Negative

[If appropriate, explain reasons in the event other implementors have expressed concerns.]

## References & acknowledgements

Your design will change and be informed by many people; acknowledge them in an ongoing way! It helps build community and, as we only get by through the contributions of many, is only fair.
