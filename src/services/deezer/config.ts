// TODO maybe use templating for hydrate track and artist with type
export const DEEZER_INFOS = {
    identifiers: /.*\/(.*)\/(\d*)\?/g,
    formattedUrl: (identifiers) => {
        return `https://api.deezer.com/${identifiers.type}/${identifiers.id}`;
      }
  };
