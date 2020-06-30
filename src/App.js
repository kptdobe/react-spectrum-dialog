import React from 'react';
import './App.css';

import {Provider} from '@react-spectrum/provider';
import {theme} from '@react-spectrum/theme-default';
import {Heading} from '@react-spectrum/text'
import {Divider} from '@react-spectrum/divider'
import {ActionButton, Button} from '@react-spectrum/button'
import {ButtonGroup} from '@react-spectrum/buttongroup'
import {DialogTrigger, Dialog} from '@react-spectrum/dialog'
import {Content} from '@react-spectrum/view'
import { Table, Row, Cell, TableBody, TableHeader, Column } from '@react-spectrum/table'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.rows = [1,2];
  }

  render () {
    return (
      <Provider theme={theme} colorScheme="dark" scale="medium">
        <Table aria-label="Results">
          <TableHeader>
            <Column width="50%">Col 1</Column>
            <Column width="50%">Col 2</Column>
          </TableHeader>
          <TableBody>
            { this.rows.map((i, index) => {
              return <Row key={"row"+i}>
                <Cell>{ "cell "+i }</Cell>
                <Cell>
                  <DialogTrigger type="fullscreen">
                        <ActionButton>{"Action button "+i}</ActionButton>
                        {(close) => (
                          <Dialog>
                            <Heading>Button</Heading>
                            <Divider />
                            <Content>{ "dialog content "+i }</Content>
                            <ButtonGroup>
                              <Button variant="cta" onPress={close}>Close</Button>
                            </ButtonGroup>
                          </Dialog>
                        )}
                      </DialogTrigger>
                  </Cell>
                </Row>
              })
            }
          </TableBody>
        </Table>
      </Provider>
    )
  }
}