import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';
import { ExampleWrapperSeamless } from '../../../components/layout-components';

import ListGroupsVariations4 from '../../../components/example-components/ListGroups/ListGroupsVariations4';
import ListGroupsVariations8 from '../../../components/example-components/ListGroups/ListGroupsVariations8';

export default function ListGroups() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="List Groups"
        titleDescription=
          "These can be used with other components and elements to create stunning and unique new elements for your UIs"
      />

      <ExampleWrapperSeamless sectionHeading="Examples variations IV">
        <ListGroupsVariations4 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Examples variations VIII">
        <ListGroupsVariations8 />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
