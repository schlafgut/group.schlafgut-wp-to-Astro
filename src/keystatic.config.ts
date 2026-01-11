import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'schlafgut CMS',
    },
  },
  collections: {
    jobs: collection({
      label: 'Stellenanzeigen',
      slugField: 'title',
      path: 'src/content/jobs/*',
      format: { contentField: 'content' },
      entryLayout: 'form',
      schema: {
        title: fields.slug({
          name: { label: 'Jobtitel' }
        }),
        gender: fields.text({
          label: 'Geschlecht',
          defaultValue: 'm/w/d'
        }),
        employmentType: fields.select({
          label: 'Anstellungsart',
          options: [
            { label: 'Vollzeit', value: 'vollzeit' },
            { label: 'Teilzeit', value: 'teilzeit' },
            { label: 'Werkstudent', value: 'werkstudent' },
            { label: 'Praktikum', value: 'praktikum' },
          ],
          defaultValue: 'vollzeit'
        }),
        location: fields.text({
          label: 'Standort',
          defaultValue: 'Eislingen'
        }),
        contactEmail: fields.text({
          label: 'Bewerbungs-Email',
          defaultValue: 'bewerbung@schlafgut.com'
        }),
        published: fields.checkbox({
          label: 'Veröffentlicht',
          defaultValue: true
        }),
        // Simple multiline text fields - stored in frontmatter as YAML strings
        tasks: fields.text({
          label: 'Deine Aufgaben',
          multiline: true
        }),
        requirements: fields.text({
          label: 'Was bringst du mit?',
          multiline: true
        }),
        benefits: fields.text({
          label: 'Warum wir?',
          multiline: true
        }),
        // Content field required by Keystatic
        content: fields.markdoc({
          label: 'Zusätzliche Infos (optional)',
        }),
      },
    }),
  },
});
