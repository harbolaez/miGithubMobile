import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MarkdownView } from 'react-native-markdown-view';
import _ from 'lodash';
import numeral from 'numeral';
import randomColor from 'randomcolor';
import { Buffer } from 'buffer';

import {
  StyleSheet, View, Text, Image, ScrollView,
} from 'react-native';

import {
  Button, Spinner, Container, Header, Content, Tab, Tabs,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  getSpecificRepo, getRepoInfo, bytesToSize,
} from '../../utils/api';

import { ItemList } from '../'
import styles from './RepoStyles';

const FileItem = ({ file }) => {
  return (
    <View style={styles.fileContainer}>
      <View style={styles.fileItem}>
        <Icon name="file-text-o" size={18} color="#900" style={{marginRight: 8, marginLeft: 5}} />
        <View>
          <Text style={styles.fileText}>{file.name}</Text>
          <Text style={styles.fileText}>{bytesToSize(file.size)}</Text>
        </View>
      </View>
    </View>
  )
}

const Language = ({ lang }) => {
  return (
    <View style={styles.langItem}>
      <Icon name="circle" size={40} style={[styles.langColor, {color: randomColor()}]} />
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{_.keys(lang)[0]}</Text>
    </View>
  )
}

class UserRepo extends Component {

  constructor(props){
    super(props);
    this.state = {
      repo: null,
      repo_name: this.props.repoName,
      username: this.props.user.login,
      readmeContent: null,
      fileContents: null,
      repoLanguages: null,
    }
    this._onTabChange = this._onTabChange.bind(this);
    this._renderMarkDown = this._renderMarkDown.bind(this)
  }

  componentDidMount(){
    const { popularRepos, repos, id } = this.props;
    const anyRepos = repos.length > 0;
    this.setState(() => ({
      repo: getSpecificRepo((anyRepos ? repos.data : popularRepos.data), id)[0]
    }))
    this._onTabChange( { ref: {props: {heading: 'readme'}}} )
  }

  _onTabChange(ref) {
    let { ref: { props: { heading } } } = ref;
    const { repo, username, repo_name, readmeContent, fileContents, repoLanguages } = this.state;
    switch(heading.toLowerCase()) {
      case 'readme':
        if (_.isNull(readmeContent)) {
          getRepoInfo(username, repo_name, 'readme')
          .then(({ data }) => this.setState( () => ({ readmeContent: data.content }) ))
          .catch(() => console.log("Error!") )
        }
        break;
      case 'files':
        if (_.isNull(fileContents)) {
          getRepoInfo(username, repo_name, 'contents')
          .then(({ data }) => this.setState( () => ({ fileContents: data }) ))
          .catch(() => console.log("Error!") )
        }
        break;
      case 'languages':
        if (_.isNull(repoLanguages)) {
          getRepoInfo(username, repo_name, 'languages')
          .then(({ data }) => this.setState( () => ({ repoLanguages: data }) ))
          .catch(() => console.log("Error!") )
        }
        break;
    }
  }

  _renderMarkDown() {
    try {
      return (
        <View>
          <MarkdownView style={styles.padding10}>
            { Buffer.from(this.state.readmeContent, 'base64') }
          </MarkdownView>
        </View>
      )
    } catch (error) {
    }
  }

  render(){
    let { repo, readmeContent, fileContents, repoLanguages } = this.state;
    let perctLangs = null;
    if (repoLanguages) {
      const langSum = _.sumBy(_.values(repoLanguages))
      perctLangs = _.map(repoLanguages, (item, ix) => ({[ix]:numeral(item/langSum).format('0.00%')}))
    }
    return (
      <Container>
        <View style={{minHeight: 110}}>
          { repo && <ItemList repo={repo} /> }
        </View>
        <Tabs initialPage={0} onChangeTab={this._onTabChange}>
          <Tab heading="README" >
            <ScrollView>
              { !!readmeContent
                ? this._renderMarkDown()
                : <Spinner color='red' />
              }
            </ScrollView>
          </Tab>
          <Tab heading="FILES">
            <ScrollView>
              <View style={[styles.padding10, {marginBottom: 15}]}>
                { !!fileContents && fileContents.map((file, ix)=>{
                  return (
                    <FileItem key={ix} file={file} />
                  )
                })}
              </View>
            </ScrollView>
          </Tab>
          <Tab heading="LANGUAGES">
            <ScrollView>
              <View style={[styles.padding10, {marginBottom: 15}]}>
                { !!perctLangs
                  ? perctLangs.map((lang, ix)=> <Language key={ix} lang={lang}/> )
                  : <Spinner color='red' />
                }
              </View>
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const mapStateToProps = ({ user, repos, popularRepos }) => {
  return {
    user,
    repos,
    popularRepos
  }
}

export default connect(mapStateToProps, {})(UserRepo)