import gql from "graphql-tag";

export const typeDefs = gql`
  "Main application query used for retrieving Tracks for the home page"
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    "Track identifier"
    id: ID!
    "Title of the track"
    title: String!
    "The related Author of the track"
    author: Author!
    "Thumbnail image url"
    thumbnail: String
    "Approximate duration of the track in minutes"
    length: Int
    "Number of Modules in the track"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    "Author identifier"
    id: ID!
    "Full name of the Author"
    name: String!
    "Author photo image url"
    photo: String
  }
`;
