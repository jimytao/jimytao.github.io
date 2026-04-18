Jekyll::Hooks.register :site, :post_write do |site|
  protected_posts = site.posts.docs.select { |p| p.data['protected'] == true }
  urls = protected_posts.map(&:url)
  manifest_path = File.join(site.dest, 'protected-manifest.txt')
  File.write(manifest_path, urls.join("\n"))
  Jekyll.logger.info 'Protected posts:', "#{urls.size} post(s) flagged for encryption"
end
