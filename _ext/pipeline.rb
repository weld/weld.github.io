require 'bootstrap-sass'

Awestruct::Extensions::Pipeline.new do
  extension Awestruct::Extensions::Posts.new( '/news' )
  #extension Awestruct::Extensions::Paginator.new( :posts, '/news/index', :per_page=>5 )
  extension Awestruct::Extensions::Indexifier.new
end

