# WordPress

Here are some general tips and tricks for Wordpress and all the plugins you need.
If you need any licenses just ask.

## Commonly used plugins

#### [Stop XML-RPC Attack](https://wordpress.org/plugins/stop-xmlrpc-attack/)

- Stop brute force attacks, DOS/DDOS and spam, targeting the XML-RPC interface in WordPress

#### [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)

- W3 Total Cache improves the SEO and user experience of your site by increasing website performance, reducing download times via features like content delivery network (CDN) integration.

#### [Yoast Seo](https://wordpress.org/plugins/wordpress-seo/)

- Search engine optimization plugin

#### [ACF, Advanced Custom Fields](https://www.advancedcustomfields.com/)

- Advanced Custom Fields for WordPress Developers. We got a pro license.

## Good practice
- Optimize images (There are many plugins that help optimize images on live site as well)
- Disable comments
- Google analytics
- Google site verification file 
- Development: 301 directs in htaccess if a site already exists
- Development: minify js, minify css, minify images
- Development: SEO (TODO ADD LINK)
- WP admin: Before deploying, make sure this setting is *not* enabled: "Settings/Reading/Discourage search engines from indexing this site"
- Site map (There are plugins that help create sitemaps)

## Good snippets
- Add svg support for wordpress. (https://www.leighton.com/blog/enable-upload-of-svg-to-wordpress-media-library/)
Add this code to functions.php
```php
function custom_mtypes( $m ){
  $m['svg'] = 'image/svg+xml';
  $m['svgz'] = 'image/svg+xml';
  return $m;
}
add_filter( 'upload_mimes', 'custom_mtypes' );
```
