import { config, collection, singleton, fields } from '@keystatic/core';

const isLocal = import.meta.env.DEV;

export default config({
  storage: isLocal
    ? { kind: 'local' }
    : { kind: 'cloud' },
  cloud: {
    project: 'schlafgut-group/group-schlafgut',
  },
  ui: {
    brand: {
      name: 'schlafgut CMS',
    },
  },
  singletons: {
    settings: singleton({
      label: 'Website Einstellungen',
      path: 'src/content/settings/index',
      schema: {
        tickerText: fields.text({
          label: 'Ticker Text',
          description: 'Text der im Ticker oben auf der Seite läuft. HTML erlaubt (z.B. <strong>join us!</strong>)',
          defaultValue: 'Paid Social Marketer (m/w/d), Marktplatzmanager (m/w/d), Werkstudenten (m/w/d) <strong>join us!!!</strong>',
        }),
      },
    }),
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
        applyUrl: fields.url({
          label: 'Bewerbungslink',
          description: 'Link zum Bewerbungsformular (z.B. Factorial HR)',
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
