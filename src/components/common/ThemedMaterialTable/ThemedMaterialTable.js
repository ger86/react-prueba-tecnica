/* eslint-disable react/prop-types */
import React, {useMemo} from 'react';
import Box from '@material-ui/core/Box';
import MaterialTable from 'material-table';
import tableIcons from 'theme/tableIcons';
import useStyles from './styles';

function ThemedMaterialTable({localization, ...rest}) {
  const classes = useStyles();
  const localizationProp = useMemo(
    function () {
      return {
        header: {actions: 'Acciones'},
        toolbar: {searchPlaceholder: 'Buscar'},
        pagination: {labelRowsSelect: 'Seleccionar'},
        body: {emptyDataSourceMessage: 'No hay datos'},
        ...localization
      };
    },
    [localization]
  );
  return (
    <div className={classes.wrapper}>
      <MaterialTable
        icons={tableIcons}
        localization={localizationProp}
        components={{Container: Box}}
        {...rest}
      />
    </div>
  );
}

export default ThemedMaterialTable;
