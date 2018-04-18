import Controller from '@ember/controller';

export default Controller.extend({
  reset() {
    this.setProperties({
      first: '',
      last: ''
    });
  },

  actions: {
    saveAuthor(ev) {
      ev.preventDefault();
      let author = this.store.createRecord('author', this.model);

      author.save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
