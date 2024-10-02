<?php
define( 'WP_CACHE', true );


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bitchhht_wp50' );

/** Database username */
define( 'DB_USER', 'bitchhht_wp50' );

/** Database password */
define( 'DB_PASSWORD', 'Sp)2!c6!ob[VA@p0' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'muncidjrdlupfmi0lgz5u1tfr3tcyhlfxkxmv3olxgksolnav8r2vhovlloirmum' );
define( 'SECURE_AUTH_KEY',  '83ozyh6zweeaeybwkvjybramcyxuum0zvwy0beasolcvunzcjgmememxvkfafg6m' );
define( 'LOGGED_IN_KEY',    'zwvsmtu85c83ixxnslslhrqaaw1xz1mlmns8ylwuzpynmxmqsevlfwcrshfdgivc' );
define( 'NONCE_KEY',        'b2rdun4bbs1ithmjqj0uze5u5gle7ze6n0uu670nrsnwhbycvixcxqv9e0nsfp6y' );
define( 'AUTH_SALT',        'grk3jf4d4e1w0glcinxrnqm3benpnbj1ssn4cgbulkgo0ranpxvl41ifhrkewcsl' );
define( 'SECURE_AUTH_SALT', 'xh6gzzbgrmybrktdth2wssdtp23cujoct3lfazrrvwup5alcumkoirj46njk4tnt' );
define( 'LOGGED_IN_SALT',   'igqkcuunbzhzbanq4pjzjlgh8allqiimn1kky86lf3fpviyythzll2rav1pqgwnj' );
define( 'NONCE_SALT',       'nx5kzpa8i3kxtlemmrwhlfjijfsjfb0ctdaccrdnybb4owz73gspwjtsxxph2bvw' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpqd_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
