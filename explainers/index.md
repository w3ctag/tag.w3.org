---
layout: page
title: Writing Effective Explainers for W3C TAG Review
---

## Participate

- [Explainer Explainer issues](https://github.com/w3ctag/tag.w3.org/labels/explainer%20explainer)
- [GitHub
  repo](https://github.com/w3ctag/tag.w3.org/blob/main/explainers/index.md)
- [Explainer
  template](https://github.com/w3ctag/tag.w3.org/blob/main/explainers/template.md)

## Introduction

Your explainer is a living document that describes the current state of your proposed web platform feature, or collection of features.
It helps everyone with an interest in the target problem find consensus on a good way to solve it.

In the early phases of design, this may be as simple as a collection of goals and a sketch of one possible solution.
By the time you request a TAG early design review,
it should contain the following key components:

1. Discussion Venues:
   Link to venues where readers can discuss this proposal.
1. User-Facing Problem:
   Describe the problem that your proposed feature aims to solve **from an end-user's perspective**.
1. Proposed Approach:
   Explain the proposed solution or approach to addressing the identified problem.
1. Practical Use Cases:
   Show example pieces of code that use the proposed solution to solve the user-facing problems.
1. Considered Alternatives:
   Describe other ways the problem might be solved and why you prefer your proposal.
1. Accessibility, Security, and Privacy Considerations:
   Highlight any accessibility, security, and privacy implications that have been taken into account
   during the design process.

Follow the [tips](#tips) below to make your explainer as effective as possible.

Once there is a reasonable amount of consensus on the approach and high-level design,
the explainer can be used to guide spec writing,
by serving as a high-level overview of the feature to be specified and the user need it serves.

Once the spec is written and the feature is shipped,
the explainer can then provide a basis for author-facing documentation of the new feature.

## Examples of Good Explainers

- [Service Workers](https://github.com/w3c/ServiceWorker/blob/master/explainer.md)
- [`paymentRequest`](https://github.com/zkoch/paymentrequest/blob/gh-pages/docs/explainer.md)
- [Web Share](https://github.com/WICG/web-share/blob/master/docs/explainer.md)
- [Viewport API](https://github.com/WICG/ViewportAPI/blob/gh-pages/README.md)
- [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
- [Intersection Observer](https://github.com/w3c/IntersectionObserver/blob/master/explainer.md)
- [Declarative Shadow DOM](https://github.com/mfreed7/declarative-shadow-dom/blob/master/README.md)
- [Autoplay Policy Detection](https://github.com/w3c/autoplay/blob/main/README.md)

## Tips for Writing Effective Explainers
{:#tips}

Since your explainer may be referred to by a range of stakeholders,
not all of whom are likely to be highly motivated to spend a lot of time on it,
you should always try to keep your explainer as brief and easy to read as possible.

### Explain the End-User's need

Start with a clear explanation of the end-user problem you're trying to solve,
even if the connection is complex or
you discovered the problem by talking to web developers who emphasized their own needs.

Sometimes the connection to the end-user need is complicated.
Do explain the connection,
even if this requires breaking the “be brief” rule.
For example, see the
[explainer for deprecating `document.domain`](https://github.com/mikewest/deprecating-document-domain/#a-problem),
although even that could perhaps use another sentence
explaining why security boundaries are important for users.

### Write Simply

Use common words to help readers who aren't native or even fluent English speakers.

Be concise.

Expect readers to skim.
They may be doing three other things, with a headache and a looming deadline,
and you don't want them to miss your points.

- Use **bold** to draw readers' eyes to the most important points.
  (And _italics_ for intra-sentence emphasis.)
- Use bulleted or ordered lists when listing things.
- Keep your paragraphs and sentences short. Paragraphs should contain one idea only, and likely shouldn't be more than a couple of sentences. Break up large paragraphs as much as possible.

Writing succinctly is harder than writing at length.
You might need to write a first draft,
and then make one or more editing passes to cut down word count.
This is a time investment but will save time and energy for your readers.

### Describe Your Proposal Clearly

Wherever possible, use code examples rather than prose to “show” rather than “tell” your design.

Use diagrams to aid understanding.
A picture is, for most readers, much easier to process than a slab of text.

Always provide text alternatives for readers who may not be able to see images.

- Simpler images may be described via an [image alt](https://webaim.org/techniques/alttext/#complex).
- More complex images may require a longer description in the form of a footnote or appendix to the document, linked immediately after the image, with a back-link to return to the section containing the image.

Help the reader understand which parts of your explainer describe the Web as it is today and which parts of the explainer describe what you are proposing to change.  Explainers often need to explain things about the Web today to give context for the proposal.  A reader who doesn't already know the details should be able to distinguish the context from the proposed changes.

If your proposed design depends on other non-consensus features, list them.

### Show the Alternatives That You Considered

As your design evolves, keep track of and make a note of alternatives which have been considered, and your reasons for not choosing them.

You undoubtedly had reasons not to choose those alternatives, but reviewers and other stakeholders may not have that context. Avoid redundant "what about [already-ruled out alternative]" type questions by explaining why those alternatives were ruled out.

----

By following these guidelines, you can create clear, concise, and accessible explainers that effectively communicate your proposed web standards specifications for W3C TAG review.
