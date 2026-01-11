import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    jobs: collection({
      label: 'Stellenanzeigen',
      slugField: 'title',
      path: 'src/content/jobs/*',
      format: { contentField: 'tasks' },
      schema: {
        title: fields.slug({ name: { label: 'Jobtitel' } }),
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
        tasks: fields.markdoc({
          label: 'Aufgaben',
          description: 'Deine Aufgaben in dieser Position'
        }),
        requirements: fields.markdoc({
          label: 'Anforderungen',
          description: 'Was bringst du mit?'
        }),
        benefits: fields.markdoc({
          label: 'Benefits',
          description: 'Warum wir?'
        }),
        contactEmail: fields.text({
          label: 'Bewerbungs-Email',
          defaultValue: 'bewerbung@schlafgut.com'
        }),
        published: fields.checkbox({
          label: 'Veröffentlicht',
          defaultValue: true
        }),
      },
    }),
  },
});
