/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotes = /* GraphQL */ `
  query GetNotes {
    getNotes {
      id
      date
      text
      music
      location
      mood
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      date
      text
      music
      location
      mood
    }
  }
`;
