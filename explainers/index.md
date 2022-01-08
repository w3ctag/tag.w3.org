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

## Introduction

Your explainer is a living document that describes the current state of your proposed web platform feature, or collection of features.

In the early phases of design, this may be as simple as a collection of goals and a sketch of one possible solution.

As your work progresses, the explainer can help facilitate multi-stakeholder discussion and consensus-building by making clear:

- the user-facing problem which needs to be solved;
- the proposed approach to solving the problem;
- the way the proposed solution may be used in practice to address the intended use cases, via example code;
- any other venues (such as mailing list, pull requests or issue threads external to the location of the explainer) where the reader may catch up on discussions regarding the proposed feature or features;
- the alternatives which have already been considered and why they were not chosen;
- accessibility, security and privacy implications which have been considered as part of the design process.

Once there is a reasonable amount of consensus on the approach and high-level design,
the explainer can be used to guide spec writing,
by serving as a high-level overview of the feature to be specified and the user need it serves.

Once the spec is written and the feature is shipped,
the explainer can then provide a basis for author-facing documentation of the new feature.

## Examples of good explainers

- [Service Workers](https://github.com/w3c/ServiceWorker/blob/master/explainer.md)
- [`paymentRequest`](https://github.com/zkoch/paymentrequest/blob/gh-pages/docs/explainer.md)
- [Web Share](https://github.com/WICG/web-share/blob/master/docs/explainer.md)
- [Viewport API](https://github.com/WICG/ViewportAPI/blob/gh-pages/README.md)
- [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
- [Intersection Observer](https://github.com/w3c/IntersectionObserver/blob/master/explainer.md)
- [Declarative Shadow DOM](https://github.com/mfreed7/declarative-shadow-dom/blob/master/README.md)

## Tips for effective explainers:

Since your explainer may be referred to by a range of stakeholders,
not all of whom are likely to be highly motivated to spend a lot of time on it,
you should always try to keep your explainer as brief and easy to read as possible.

- Be clear about the **end-user** need, first and foremost.
  - Sometimes the connection to the end-user need is complicated.  Do explain the connection, even if this requires breaking the "be brief" rule.  (For example, see the [explainer for deprecating document.domain](https://github.com/mikewest/deprecating-document-domain/#a-problem), although even that could perhaps use another sentence explaining why security boundaries are important for users.)
- Keep it as brief and "skimmable" as you possibly can.
  - Writing succinctly is harder than writing at length. You might need to write a first draft, and then make one or more editing passes to cut down word count. This is a time investment, but will save time and energy for your readers.
  - Use bulleted lists where possible.
  - Draw attention to key points using **bold**. 
  - Keep your paragraphs and sentences short. Paragraphs should contain one idea only, and likely shouldn't be more than a couple of sentences. Break up large paragraphs as much as possible.
- Keep the language as simple as possible.
  - Not all readers will always be fluent English speakers.
  - Even if they are, they may be reading your explainer while doing three other things, with a headache and a looming deadline.
  - Be kind to your readers, since you probably want them to be kind to you.
- Wherever possible, use code examples rather than prose to "show" rather than "tell" your design.
- If you can and if it serves the document, be generous with diagrams.
  - A picture is, for most readers, much easier to process than a slab of text.
  - Always provide text alternatives for readers who may not be able to see images.
    - Simpler images may be described via an [image alt](https://webaim.org/techniques/alttext/#complex).
    - More complex images may require a longer description in the form of a footnote or appendix to the document, linked immediately after the image, with a back-link to return to the section containing the image.
- Help the reader understand which parts of your explainer describe the Web as it is today and which parts of the explainer describe what you are proposing to change.  Explainers often need to explain things about the Web today to give context for the proposal.  A reader who doesn't already know the details should be able to distinguish the context from the proposed changes.
- As your design evolves, keep track of and make a note of alternatives which have been considered, and your reasons for not choosing them.
  - You undoubtedly had reasons not to choose those alternatives, but reviewers and other stakeholders may not have that context. Avoid redundant "what about [already-ruled out alternative]" type questions by explaining why those alternatives were ruled out.
  - Direct readers to the appropriate participation forums, issue tracker, etc.
