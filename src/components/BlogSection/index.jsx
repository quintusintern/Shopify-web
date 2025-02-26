import styles from './BlogSection.module.css'

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/summer.jpg",
      title: "Spring – Summer Trending 2020",
      date: "May 11, 2022",
      author: "admin",
      description:
        "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
    {
      id: 2,
      image: "/Top.jpg",
      title: "The Easiest Way to Break Out on Top",
      date: "May 11, 2022",
      author: "admin",
      description:
        "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
    {
      id: 3,
      image: "/Season.jpg",
      title: "Style for couple in Wedding season",
      date: "May 11, 2022",
      author: "admin",
      description:
        "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
  ];

  return (
    <div className={styles.blogSection}>
      <h2 className={styles.blogHeading}>LATES FROM BLOG</h2>
      <p className={styles.blogSubheading}>The freshest and most exciting news</p>

      <div className={styles.blogContainer}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogCard}>
            <div className={styles.imgContainer}>
            <img src={post.image} alt={post.title} className={styles.blogImage} />
            </div>
            <h3 className={styles.blogTitle}>{post.title}</h3>
            <p className={styles.blogMeta}>By {post.author} on {post.date}</p>
            <p className={styles.blogDescription}>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
