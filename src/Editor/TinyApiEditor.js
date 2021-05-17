
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TinyApiEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(content, editor) {
  this.setState({content});
}

  handleSubmit(event) {
    event.preventDefault();
  }
  // handleEditorChange = (e) => {
  //   console.log(
  //     'Content was updated:',
  //     e.target.getContent()
  //   );
  // }

  render() {
    return (
      <div className='editor'>
      <form onSubmit={this.handleSubmit}>
      <Editor
      apiKey="bxx5wrgi7dhgknh6tq4w49n1mecbr7mle25sxypa1tykho05"
      value={this.state.content}
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          // toolbar:
          //   'undo redo | formatselect | bold italic | \
          //   alignleft aligncenter alignright | \
          //   bullist numlist outdent indent | help'
        }}
        onEditorChange={this.handleChange}
        />
         <br />
          <input type="submit" value="Submit" />
      </form>
      <p>{this.state.content}</p>
      </div>
    );
  }
}

export default TinyApiEditor;
//https://www.tiny.cloud/blog/react-rich-text-editor/