const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  // access WPGraphQL plugin
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  if (json.errors) {
    console.log(json.data);
  }
  return json.data;
}

//
export async function getPostsAndPages() {
  const data = await fetchAPI(
    `
    query PostsAndPages {
      posts(first: 20) {
        edges {
          node {
            id
            uri
            title
            slug
            date
            categories {
              edges {
                node {
                  name
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
                caption
                mediaDetails {
                  height
                  width
                }
              }
            }
            excerpt
            content
          }
        }
      }
      pages {
        edges {
          node {
            id
            uri
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
                caption
                mediaDetails {
                  height
                  width
                }
              }
            }
            content
          }									
        }
      }
    }`
  );
  return data;
}

//
export async function getPostId(id) {
  const data = await fetchAPI(
    `
    post(id: ${id}) {
      id
      uri
      title
      slug
      date
      categories {
        edges {
          node {
            name
          }
        }
      }
      author {
        node {
          name
          firstName
          lastName
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          caption
          mediaDetails {
            height
            width
          }
        }
      }
      excerpt
      content
    }
    `
  );
  return data.post;
}

//
export async function getAllPostsWithId() {
  const data = await fetchAPI(`
    {
      posts(first: 100) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 100) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                caption
                mediaDetails {
                  height
                  width
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
            content
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  // const postPreview = preview && previewData?.post;
  // // The slug may be the id of an unpublished post
  // const isId = Number.isInteger(Number(slug));
  // const isSamePost = isId
  //   ? Number(slug) === postPreview.id
  //   : slug === postPreview.slug;
  // const isDraft = isSamePost && postPreview?.status === "draft";
  // const isRevision = isSamePost && postPreview?.status === "publish";

  //
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          caption
          mediaDetails {
            height
            width
          }
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

//
export async function getAllProducts() {
  const data = await fetchAPI(
    `
    pages {
      edges {
        node {
          id
          date
          slug
          uri
          content
        }
      }
    }
  `
  );
  return data?.products;
}

//
export async function getProductCategory(category) {
  const data = await fetchAPI(
    `
    {
      products(where: {category: ${category}}) {
        edges {
          node {
            date
            id
            name
            type
            uri
            description
            featuredImage {
              node {
                sourceUrl
                caption
                mediaDetails {
                  height
                  width
                }
              }
            }
            productCategories {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );
  return data?.products;
}

//
export async function getPageName(name) {
  const data = await fetchAPI(
    `
    {
      pages {
        edges {
          node {
            id
            date
            slug
            uri
            title
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            content
          }
        }
      }
    }
  `
  );
  return data?.pages;
}
