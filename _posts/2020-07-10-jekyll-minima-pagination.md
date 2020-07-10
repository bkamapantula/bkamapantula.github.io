# Pagination in personal blog

The home page of my blog as a short introduction about me followed by a list of posts. The items I wanted to improve:

- paginate posts
- show excerpt for each post

As I didn't have jekyll/ruby configured on my machine, the first step was to configure it using [1]. I had to ensure jekyll and its dependencies for github-pages were installed fine.

Using a cloned copy of my [blog](https://github.com/bkamapantula/bkamapantula.github.io/), I made the next set of changes using [3]:

### Update Gemfile
- To the `Gemfile` add `gem "jekyll-paginate"` under `jekyll-plugins` group

### Update index.html
- Move contents of index.md to index.html, as jekyll-paginate uses `index.html` for pagination.
- This is invoked as the first content before anything.

### Update _config.yml
- Update `_config.yml` with:

```yaml
gems:
  - jekyll-paginate
paginate: 5
paginate_path: posts/page:num/
```

This will make 5 posts appear on the home page and subsequent posts under `/posts/page*/` endpoint.

### Update home.html

I stumbled on [2] while reading about paginating posts. The referenced code is picked from [3]. [3] has the documentation on available attributes.

```bash
<!-- This loops through the paginated posts -->
<ul class="post-list">
{% for post in paginator.posts %}
  <li>
    <span class="post-meta date">{{ post.date | date: "%b %d, %Y" }}</span>
    <h3><a class="post-link" href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt }}</p>
  </li>
{% endfor %}
</ul>

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">prev</a>
  {% else %}
    <span class="previous">prev</span>
  {% endif %}
  <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">next</a>
  {% else %}
    <span class="next">Next</span>
  {% endif %}
</div>
```

- I changed `post.content` to `post.excerpt` as I only wanted to display the excerpt with links to the actual posts.
- After comparing the output against existing version, I made the following changes:
  - add the markup for listing posts: `<ul>`, `<li>`
  - add class `post-list` to `<ul>`
  - add class `post-meta` to `<span>`
  - add class `post-link` to `<a>`
  - format date so it reads as `Month Date, Year`

Initially, I was skeptical about changing Ruby-based Jekyll configuration as I wasn't familiar with it. I realized the templating looked exactly like in Python's Tornado and eased in to it.

# References

1. How to install Jekyll on Ubuntu by Computing for Geeks. [Link](https://computingforgeeks.com/how-to-install-jekyll-on-ubuntu-18-04/)
2. Where does index.html go? on jekyllrb talk. [Link](https://talk.jekyllrb.com/t/pagination-question-where-does-index-html-go/262/2)
3. Official Jekyll Pagination docs. [Link](https://jekyllrb.com/docs/pagination/)
