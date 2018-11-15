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
- Optimera bilder (There are many plugins that help optimize images on live site aswell)
- Stänga av kommentarer
- Google analytics
- Google site verification file
- Utveckling: 301 directs i htaccess om det redan finns en sida
- Utveckling: minifiering js, minifiering css, minifiering bilder
- Utveckling: koda rätt för seo (TODO ADD LINK)
- WP admin: Vid lansering kontrollera så att denna inställning *inte* är på: "Inställningar/Läsa/Be sökmotorer att inte indexera denna webbplats"
- Site map (There are plugins that help create sitemaps)

## Good snippets
- Adjustments to default Bootstrap grid to fit Kumpan's 8pt grid designs.
Add this code to _variables.scss:
```
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
```css
function custom_mtypes( $m ){
  $m['svg'] = 'image/svg+xml';
  $m['svgz'] = 'image/svg+xml';
  return $m;
}
add_filter( 'upload_mimes', 'custom_mtypes' );
```
