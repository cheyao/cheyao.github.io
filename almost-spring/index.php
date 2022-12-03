<?php get_header(); ?>
<?php $showauthor = almostspring_showauthor(); $dateformat = almostspring_dateformat(); ?>

<div id="content">

	<?php if (have_posts()) : ?>
	
		<?php $post = $posts[0]; // Thanks Kubrick for this code ?>
		
		<?php if (is_category()) { ?>				
		<h2><?php _e('Archive for'); ?> <?php echo single_cat_title(); ?></h2>
		
 	  	<?php } elseif (is_day()) { ?>
		<h2><?php _e('Archive for'); ?> <?php the_time('F j, Y'); ?></h2>
		
	 	<?php } elseif (is_month()) { ?>
		<h2><?php _e('Archive for'); ?> <?php the_time('F, Y'); ?></h2>

		<?php } elseif (is_year()) { ?>
		<h2><?php _e('Archive for'); ?> <?php the_time('Y'); ?></h2>

		<?php } elseif (is_author()) { ?>
		<h2><?php _e('Author Archive'); ?></h2>

		<?php } elseif (is_search()) { ?>
		<h2><?php _e('Search Results'); ?></h2>

		<?php } ?>
				
		<?php while (have_posts()) : the_post(); ?>
		
			<div class="post" id="post-<?php the_ID(); ?>">
	
				<h2 class="posttitle"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Permanent link to'); ?> <?php the_title(); ?>"><?php the_title(); ?></a></h2>
			
				<p class="postmeta"> 
				<?php if ($dateformat == 'default') { 
					the_time(get_settings('date_format'));
				} else { 
					the_time('F j, Y');
				} ?>
				<?php _e('at'); ?> <?php the_time() ?> 
				<?php if ($showauthor == 'true') {
					_e('by'); echo ' '; the_author_posts_link();
				} ?>
				&#183; <?php _e('Filed under'); ?> <?php the_category(', ') ?>
				<?php edit_post_link(__('Edit'), ' &#183; ', ''); ?>
				</p>
			
				<div class="postentry">
				<?php if (is_search()) { ?>
					<?php the_excerpt() ?>
				<?php } else { ?>
					<?php the_content(__('Read the rest of this entry &raquo;')); ?>
				<?php } ?>
				</div>
			
				<p class="postfeedback">
				<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Permanent link to'); ?> <?php the_title(); ?>" class="permalink"><?php _e('Permalink'); ?></a>
				<?php comments_popup_link(__('Comments'), __('Comments (1)'), __('Comments (%)'), 'commentslink', __('Comments off')); ?>
				</p>
				
				<!--
				<?php trackback_rdf(); ?>
				-->
			
			</div>
				
		<?php endwhile; ?>

		<div class="postnav">
		<div class="prev"><?php next_posts_link(__('&laquo; Previous Entries')) ?></div>
		<div class="next"><?php previous_posts_link(__('Next Entries &raquo;')) ?></div>
		</div>
		
	<?php else : ?>

		<h2><?php _e('Not Found'); ?></h2>

		<p><?php _e('Sorry, but no posts matched your criteria.'); ?></p>
		
		<h3><?php _e('Search'); ?></h3>
		
		<?php include (TEMPLATEPATH . '/searchform.php'); ?>

	<?php endif; ?>

</div>
	
<?php get_sidebar(); ?>

<?php get_footer(); ?>
