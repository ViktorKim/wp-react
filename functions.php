<?php
/**
 * Created by PhpStorm.
 * User: Viktor.Kim
 * Date: 10/5/2018
 * Time: 12:34 PM
 */

add_theme_support('menus');
add_theme_support('widgets');

// Include TGM Activator
require_once get_template_directory() . '/modules/TGM-Plugin-Activation-2.6.1/class-tgm-plugin-activation.php';
add_action( 'tgmpa_register', 'kim_register_required_plugins' );
function kim_register_required_plugins() {
    /*
     * Array of plugin arrays. Required keys are name and slug.
     * If the source is NOT from the .org repo, then source is also required.
     */
    $plugins = array(

        // This is an example of how to include a plugin from the WordPress Plugin Repository.
        array(
            'name'      => 'WP API Menus',
            'slug'      => 'wp-api-menus',
            'required'  => true,
        ),

    );
    $config = array(
        'id'           => 'wp_react',                 // Unique ID for hashing notices for multiple instances of TGMPA.
        'default_path' => '',                      // Default absolute path to bundled plugins.
        'menu'         => 'tgmpa-install-plugins', // Menu slug.
        'has_notices'  => true,                    // Show admin notices or not.
        'dismissable'  => false,                    // If false, a user cannot dismiss the nag message.
        'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
        'is_automatic' => true,                   // Automatically activate plugins after installation or not.
        'message'      => '',                      // Message to output right before the plugins table.
    );
    tgmpa( $plugins, $config );
}

//Register nav menu
add_action( 'after_setup_theme', 'kim_register_nav_menu' );
function theme_register_nav_menu() {
    register_nav_menu( 'primary', 'Primary Menu' );
}