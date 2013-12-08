#------------------------------------------------------------------------
# Configuration
#------------------------------------------------------------------------

# LiveReload and pretty URLs
activate :livereload
activate :directory_indexes

# Use relative paths
activate :relative_assets
set :relative_links, true

# Asset paths
set :css_dir,    'stylesheets'
set :js_dir,     'javascripts'
set :images_dir, 'images'

# Activate google-analytics extension
configure :development do
  activate :google_analytics do |ga|
    ga.tracking_id = false
  end
end

configure :build do
  activate :google_analytics do |ga|
    ga.tracking_id = 'UA-46292367-1'
  end
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
