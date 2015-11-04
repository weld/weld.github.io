require 'bootstrap-sass'
require File.expand_path("../faq.rb", __FILE__)

Awestruct::Extensions::Pipeline.new do
  extension Awestruct::Extensions::Posts.new( '/news', :posts )
  extension Awestruct::Extensions::Indexifier.new
  extension Awestruct::Extensions::Sitemap.new
  extension Awestruct::Extensions::Paginator.new( :posts, '/news/index', :per_page => 5 )
  extension Awestruct::Extensions::Atomizer.new(:posts, '/news.atom')
  extension Awestruct::Extensions::FAQ.new( '_faq', :faq )
  extension Awestruct::Extensions::Disqus.new
  helper Awestruct::Extensions::GoogleAnalytics
end

