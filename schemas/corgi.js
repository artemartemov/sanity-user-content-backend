export default {
  name: 'corgi',
  title: 'Corgi',
  type: 'document',
  fields: [
	{
	  title: 'Corgi Image',
	  name: 'corgiImage',
	  type: 'image'
	},
	{
	  title: 'Suggested Names',
	  name: 'suggestedNames',
	  type: 'array',
	  of: [{
		  type: 'object',
		  name: 'suggestedName',
		  title: 'Suggested Name',
		  fields: [
			  {
				title: 'Name',
				name: 'name',
				type: 'string'
			  },
			  {
				title: 'Votes',
				name: 'votes',
				type: 'number'
			  }
		  ],
		  preview: {
			  select: {
				  title: 'name',
				  votes: 'votes',
			  },
			  prepare(selection) {
				  return {
					  ...selection,
					  subtitle: `${selection.votes} votes`
				  }
			  }
		  }
	  }]
	}
  ],
  preview: {
	  select: {
		title: 'corgiImage.asset.creditLine',
		media: 'corgiImage',

	  }
  }
}
