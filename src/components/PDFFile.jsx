import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({});

function PDFFile() {
    return (
        <Document>
            <Page style={styles}>
                <Text>
                    <Image></Image>
                </Text>
            </Page>
        </Document>
    )
};

export default PDFFile;