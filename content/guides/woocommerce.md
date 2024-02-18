---
title: "WooCommerce FastCGI Optimization"
description: "Instructions for optimizing FastCGI directives for WooCommerce sites."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

If you plan on using [WooCommerce](https://woocommerce.com/) for your WordPress eCommerce site, you'll want to update the FastCGI directives to
get the best performance and experience while using FastCGI for your caching solution.

To update, navigate to your site in [Cleavr](https://cleavr.io), click on **Cache**, click the action button, and then select **Tweak Cache Settings**.

```
# Don't skip cache by default
  set $skip_cache 0;

  # POST requests should always go to PHP
  if ($request_method = POST) {
    set $skip_cache 1;
  }

  # URLs containing query strings should always go to PHP
  if ($query_string != "") {
    set $skip_cache 1;
  }

  # Don't cache uris containing the following segments
  if ($request_uri ~* "/wp-admin/|/cart/|/my-account.*|/checkout/|/wishlist.*|/wp-json/|/xmlrpc.php|wp-.*.php|/feed/|index.php|sitemap(_index)?.xml|[a-z0-9_-]+-sitemap([0-9]+)?.xml") {
    set $skip_cache 1;
  }

  # Don't use the cache for logged in users or recent commenters
 if ($http_cookie ~ (wp-postpass|wordpress_logged_in|comment_author)_ ) {
    set $skip_cache 1;
  }

  # If we skip the cache it's likely customized for one user. Set the caching headers to match.
  if ($skip_cache = 1) {
    set $cacheControl "private, max-age=0, s-maxage=0, no-cache, no-store";
  }
  if ($skip_cache = 0) {
    set $cacheControl "public, max-age=86400, s-maxage=86400";
  }
```
