/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addNote = /* GraphQL */ `
  mutation AddNote(
    $id: ID!
    $date: String
    $text: String!
    $music: String
    $mood: String
  ) {
    addNote(id: $id, date: $date, text: $text, music: $music, mood: $mood) {
      id
      date
      text
      music
      location
      mood
    }
  }
`;
