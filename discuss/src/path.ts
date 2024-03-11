const paths = {
  home() {
    return "/";
  },
  topic(topicSlug: string) {
    return `/t/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
