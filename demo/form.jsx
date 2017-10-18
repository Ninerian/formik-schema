import ReactDOM from 'react-dom';
import moment from 'moment';

import { Form } from '../src/index';


const schema1 = {
  fields: [
    {
      name: "email",
      title: "Email",
      type: "email",
    },
    {
      name: "password",
      title: "Password",
      type: "password",
    },
    {
      name: "OS",
      title: "Your OS",
      type: "choices",
      options: [
        {
          value: 'linux',
          title: "Linux",
        },
        {
          value: 'macos',
          title: "macOS / OS X",
        },
        {
          value: 'windows',
          title: "Windows",
        },
        {
          value: 'other',
          title: "Other",
        },
      ]
    },
    {
      name: "date",
      title: "Chose a date",
      type: "date",
      datePickerProps: {
        inline: true,
      },
      helpText: "Here is an example with the inline option",
    },
  ],
};

const schema2 = {
  form: {
    renderer: 'bs4-modal-horizontal',
    rendererOptions: {
      modalId: 'formModal',
      modalTitle: 'Exemple dans une fenêtre modale',
    }
  },
  fields: [
    {
      name: "address",
      title: "Your address",
      type: "address",
    },
    {
      name: "comment",
      title: "A comment ?",
      type: "textarea",
      helpText: "Any comment you may have."
    },
    {
      name: "accept",
      title: "Conditions",
      type: "checkbox",
      description: "I accept everything.",
    },
  ],
};

ReactDOM.render(
  <div>
    <h2>Sample form</h2>
    <Form
      initialValues={{
        email: "",
        password: "",
        OS: 'linux',
        date: moment("2016-12-24"),
      }}
      schema={schema1}
      onSubmit={(values) => {console.log(values)}}
    />
    <hr />
    <h2>Form in a modal</h2>
    <Form
      initialValues={{
        address: "",
        accept: true,
      }}
      schema={schema2}
      onSubmit={(values) => {console.log(values)}}
    />
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#formModal">
      Launch demo modal
    </button>
  </div>,
  document.getElementById('root')
);
