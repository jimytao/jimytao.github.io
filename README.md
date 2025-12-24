# Chirpy Starter

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

When installing the [**Chirpy**][chirpy] theme through [RubyGems.org][gem], Jekyll can only read files in the folders
`_data`, `_layouts`, `_includes`, `_sass` and `assets`, as well as a small part of options of the `_config.yml` file
from the theme's gem. If you have ever installed this theme gem, you can use the command
`bundle info --path jekyll-theme-chirpy` to locate these files.

The Jekyll team claims that this is to leave the ball in the user’s court, but this also results in users not being
able to enjoy the out-of-the-box experience when using feature-rich themes.

To fully use all the features of **Chirpy**, you need to copy the other critical files from the theme's gem to your
Jekyll site. The following is a list of targets:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

To save you time, and also in case you lose some files while copying, we extract those files/configurations of the
latest version of the **Chirpy** theme and the [CD][CD] workflow to here, so that you can start writing in minutes.

## Usage

Check out the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy/wiki).

## Contributing

This repository is automatically updated with new releases from the theme repository. If you encounter any issues or want to contribute to its improvement, please visit the [theme repository][chirpy] to provide feedback.

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE


## Personal Blog Infrastructure

This repository hosts my personal blog, built as a long-term, low-maintenance knowledge and expression system rather than a content platform.

The design intentionally separates long-form thinking, rational discussion, and emotional / instant communication, using different tools for different cognitive purposes.

Core Stack Overview

Static Site Generator: Jekyll

Theme: Chirpy

Hosting: GitHub Pages

Content Format: Markdown + YAML Front Matter

The blog follows Chirpy’s conventions for layout, navigation, and front matter.
Some features are theme-dependent.

Theme Notes (Chirpy)

Blog structure and front matter fields follow Chirpy standards

Built-in features include TOC, search, dark mode, and layout presets

Some integrations (comments, tabs, layout rendering) rely on Chirpy’s internal structure

Note:
Switching themes may require refactoring front matter, layouts, and integrations.

---

Article Comments (Rational Discussion)

Solution: Giscus

Backend: GitHub Discussions

Authentication: GitHub OAuth

Scope & Purpose

Used only for article-level comments

Designed for rational, topic-focused discussion

Each post maps to a GitHub Discussion thread

Important Notes

Comment data is stored in GitHub Discussions, not in this repository

GitHub Discussions must remain enabled

Changing repository settings or disabling Discussions may break existing comments

---

Anonymous Chatroom (Instant / Emotional Communication)

Solution: Waline (self-hosted)

Frontend: Embedded Waline client in Jekyll (Chirpy)

Backend: Waline service deployed on Vercel (Serverless)

Database: LeanCloud (International)

Access: Custom domain (Vercel default domain is blocked in mainland China)---sapceship

Purpose

Provide anonymous, low-threshold communication

Serve as a space for instant, non-article-bound interaction

Intentionally separated from article comments to avoid polluting long-form discussions

Implementation Notes

Implemented as a standalone page (_tabs/chat.md)

Independent from the article comment system

Removal or modification may involve changes across DNS, Vercel, and LeanCloud

