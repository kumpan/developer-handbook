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

#### [ACF, Advanced Custom Fields](https://www.advancedcustomfields.com/)

- Advanced Custom Fields for WordPress Developers. We got a pro license.

#### [Wordfence](https://wordpress.org/plugins/wordfence/)

- Wordfence for Wordpress firewall and security scanner


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
- robots.txt file
- We should try to always have the pages run https. (SSL & letsencrypt)
- When page is done, make sure that chrome inspector doesnt have any console log errors.
- Run the site through https://developers.google.com/speed/pagespeed/insights/ or Audit in dev tools (https://developers.google.com/web/tools/lighthouse/#devtools) and fix the problems


## Good snippets
- Adjustments to default Bootstrap grid to fit Kumpan's 8pt grid designs.
Add this code to _variables.scss:
```css
$container-max-widths: (
  sm: 576px,
  md: 720px,
  lg: 960px,
  xl: 1168px
) !default;

$grid-gutter-width: 32px !default;
```

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
