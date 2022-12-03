<?php get_header(); ?>
<?php $showauthor = almostspring_showauthor(); $dateformat = almostspring_dateformat(); ?>

<div id="content">

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
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
			<?php the_content(__('Read the rest of this entry &raquo;')); ?>
			<?php wp_link_pages(); ?>
			</div>

			<p class="postfeedback">
			<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Permanent link to'); ?> <?php the_title(); ?>" class="permalink"><?php _e('Permalink'); ?></a>
			</p>
			
		</div>
		
		<?php comments_template(); ?>
		
		<div class="postnav">
		<div class="prev"><?php previous_post_link('&laquo; %link') ?></div>
		<div class="next"><?php next_post_link('%link &raquo;') ?></div>
		</div>
				
	<?php endwhile; else : ?>

		<h2><?php _e('Not Found'); ?></h2>
		<p><?php _e('Sorry, but the page you requested cannot be found.'); ?></p>		
		<?php include (TEMPLATEPATH . '/searchform.php'); ?>

	<?php endif; ?>
	
</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>


