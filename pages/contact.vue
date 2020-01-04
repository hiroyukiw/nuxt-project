<template lang="pug">
section.section
  .container
    form
      fieldset
        legend Vue Contact Form
        .field
          label.label Name
          .control
            input.input(type='text' placeholder='Text input')
        .field
          label.label Username
          .control.has-icons-left.has-icons-right
            input.input.is-success(type='text' placeholder='Text input' value='bulma')
            span.icon.is-small.is-left
              i.fas.fa-user
            span.icon.is-small.is-right
              i.fas.fa-check
          p.help.is-success This username is available
        .field
          label.label Email
          .control.has-icons-left.has-icons-right
            input.input.is-danger(type='email' placeholder='Email input' value='hello@')
            span.icon.is-small.is-left
              i.fas.fa-envelope
            span.icon.is-small.is-right
              i.fas.fa-exclamation-triangle
          p.help.is-danger This email is invalid
        .field
          label.label Subject
          .control
            .select
              select
                option Select dropdown
                option With options
        .field
          label.label Message
          .control
            textarea.textarea(placeholder='aextarea')

        .field
          .control
            label.checkbox
              input(type='checkbox' v-model="myAgree")
              |       I agree to the 
              a(href='#') terms and conditions

        .field
          .control
            label.radio
              input(type='radio' name='question')
              |       Yes
            label.radio
              input(type='radio' name='question')
              |       No
        .field.is-grouped
          .control
            button.button.is-link(:disabled="myAgree==false") Submit
          .control
            button.button.is-link.is-light(:disabled="myAgree==false") Cancel

</template>

<script>
export default {
  data: () => {
    return {
      myAgree: false
    }
  }
}
</script>