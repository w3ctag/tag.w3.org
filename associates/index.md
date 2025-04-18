---
layout: page
title: TAG Associates
---

In order to build a community around the TAG, help to make TAG design reviews more impactful, and
create a pipeline for prospective new TAG members, the TAG have agreed to create a TAG Associate
mechanism. TAG Associates would be officially designated and would have specific duties and
responsibilities, but would not be considered TAG members.

A larger community will help us do the work we do. More people make it easier for us to do more
design reviews. A broader set of expertise allows us to provide more substantive technical
leadership.

## Process

The TAG may appoint "associate members" by consensus.

Any TAG member can recommend any person to become an Associate. Each TAG Associate requires that a
TAG member be assigned as a mentor and primary contact.

TAG Associates are invited to all TAG virtual meetings except sessions that the chairs exclude. For
face-to-face meetings, Associates might be invited to join for specific topics or sessions. They are
encouraged to participate in TAG design reviews and may participate in the development of TAG
findings and other TAG documents. They do not receive any of the formal powers or duties associated
with TAG membership, and cannot formally represent the TAG.

TAG Associate terms expire annually, at the time that new elected TAG members join the TAG. TAG
Associates must be re-nominated at the start of each term.

Two or more TAG Associates must not share the same primary affiliation. If a TAG associate changes
affiliation so that this limit is exceeded, they retain their TAG associate status.

When a TAG Associate is nominated, TAG consensus is necessary to confirm the nomination. If the TAG
does not reach consensus within 4 weeks, the nominee does not become an Associate. The Associate's
term starts on the next business day.

Any TAG member can request that the TAG consider the removal of an Associate. Unless the TAG makes a
consensus decision to retain the Associate within 4 weeks of this request, the Associate is removed.

Note: TAG Associates are able to be nominated as a candidate in TAG elections. Upon being elected or
appointed, the standard TAG process applies.

Being a TAG Associate does not grant any special status within the W3C process, though the TAG may
help them apply to become Invited Experts for certain working groups. Contributions they make to W3C
work are subject to the procedural rules that apply to outside contributions.

The TAG will publicly document its current and past TAG Associates.

<link rel="stylesheet" href="/history/members.css">

{%- assign minYear = 2025 -%}
{%- capture years %}{{site.data.associates.maxYear | minus: minYear | plus: 1}}{% endcapture -%}

<table id="membersList" style="--minYear: {{minYear}}; --years: {{years}}">
  <thead class="years">
    <tr>
      <th>Name</th>
      {% for year in (minYear..site.data.associates.maxYear) -%}
        <th>{{year}}</th>
      {% endfor -%}
    </tr>
  </thead>
  {% for associate in site.data.associates.associates -%}
    <tr>
      <th class="name" scope="row">{{associate.name}}</th>
      <td class="terms" colspan="{{years}}">
        {% for term in associate.terms -%}
        {%- capture start %}{{term.start|date:"%b %-d, %Y"}}{% endcapture -%}
        {%- capture end %}{{term.end|date:"%b %-d, %Y"}}{% endcapture -%}
          <div class="term appointed" title="{{start}} &ndash; {{end}}"
               style="--sy:{{term.start|date:"%Y"}}; --sm:{{term.start|date:"%-m"}}; --sd:{{term.start|date:"%-d"}}; --ey:{{term.end|date:"%Y"}}; --em:{{term.end|date:"%-m"}}; --ed:{{term.end|date:"%-d"}}">
               {{start}}&ndash;{{end|remove:"Jan 31, "}}
          </div>
        {% endfor -%}
      </td>
    </tr>
  {% endfor -%}
</table>

## References

* [Feb 13, 2025 appointments](https://github.com/w3ctag/meetings/blob/gh-pages/2025/02-10-minutes.md#appoint-tag-associates)
