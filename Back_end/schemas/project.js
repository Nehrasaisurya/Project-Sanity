export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title of the Project',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Image of your project',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
    },
    {
      name: 'gitHublink',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'livelink',
      title: 'Live Website Link',
      type: 'url',
    },
    {
      name: 'techused',
      title: 'Tech Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'techused',
      },
    },
  ],
}
