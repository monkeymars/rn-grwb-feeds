import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useFeeds from './useFeeds';

const FeedsComponent = () => {
  const { stats } = useFeeds();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.flex}>
          {stats.map((stat) => (
            <View key={stat.name} style={styles.box}>
              <View
                style={[styles.flex, styles.flexRow, styles.justifyBetween]}
              >
                <Text style={styles.textStat}>{stat.name}</Text>
                {stat.changeType ? (
                  <Text
                    style={[
                      styles.textChange,
                      stat.changeType === 'negative'
                        ? styles.textPositive
                        : styles.textNegative,
                    ]}
                  >
                    {stat.change}
                  </Text>
                ) : null}
              </View>
              <Text style={[styles.flex, styles.mt20]}>
                <Text style={styles.textValue}>{stat.value}</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827',
  },
  box: {
    marginVertical: 30,
  },
  mt20: {
    marginTop: 20,
  },
  flex: {
    display: 'flex',
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  textStat: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
  },
  textValue: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '600',
  },
  textChange: {
    marginTop: -3,
    fontSize: 16,
  },
  textPositive: {
    color: 'red',
  },
  textNegative: {
    color: 'green',
  },
});

export default FeedsComponent;
