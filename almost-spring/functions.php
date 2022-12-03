<?php

/* Widgets */

if ( function_exists('register_sidebar') )
    register_sidebar();

/* Theme options */

include(dirname(__FILE__).'/themetoolkit.php');

themetoolkit(
	'almostspring',
	array(    
	'sep1' => 'Layout {separator}',
	'sidebar' => 'Sidebar location {radio|left|Left|right|Right}',
	'sep2' => 'Blog Entries {separator}',
	'showauthor' => 'Show post author {radio|true|Yes|false|No}',
	'dateformat' => 'Date format {radio|fjy|F j, Y (Original Almost Spring date format, e.g. January 15, 2000)|default|WordPress default, as set in Options > General Options}',
	),
	__FILE__
);
	
function almostspring_sidebar() {
	global $almostspring;
	if ($almostspring->option['sidebar'] == "left") { 
	  echo '#content { float: right; margin: 0 20px 0 0; }
			#sidebar { float: right; }';
	} 
}

function almostspring_showauthor() {
	global $almostspring;
	return $almostspring->option['showauthor'];
}

function almostspring_dateformat() {
	global $almostspring;
	return $almostspring->option['dateformat'];
}

if (!$almostspring->is_installed()) { 
	$set_defaults['sidebar'] = 'right'; 
	$set_defaults['showauthor'] = 'false'; 
	$set_defaults['dateformat'] = 'fjy'; 
	$result = $almostspring->store_options($set_defaults); 
} 

?>