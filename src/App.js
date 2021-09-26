import { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { List, Loader, Dimmer, Placeholder, Image, Segment, Grid, Divider, Header, Icon, Button, Search } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Cari Dokumen
                </Header>

                <Search placeholder='Search document...' />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='pdf file outline' />
                  Tambah Dokumen Baru
                </Header>
                <Button primary>Tambah Dokumen</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader content='Loading' />
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='full' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <h3>Website Terkait</h3>
            <List>
              <List.Item content={<a href='http://google.com' >Google</a>} icon='linkify' />
              <List.Item content={<a href='http://facebook.com' >Facebook</a>} icon='linkify' />
              <List.Item content={<a href='https://react.semantic-ui.com/' >Semantic UI</a>} icon='linkify' />
              <List.Item content={<a href='http://niomic.com' >Niomic</a>} icon='linkify' />
              <List.Item content={<a href='https://reactjs.org' >React</a>} icon='linkify' />
            </List>
          </Grid.Column>
        </Grid>
      </div >
    )
  }
}
export default App