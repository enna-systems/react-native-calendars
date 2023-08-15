import PropTypes from 'prop-types';
import React from 'react';
import { SectionListProps, DefaultSectionT, ViewStyle, TextProps, StyleProp } from 'react-native';
import { Theme } from '../types';
export interface AgendaListProps extends SectionListProps<any, DefaultSectionT> {
    /** Specify theme properties to override specific styles for calendar parts */
    theme?: Theme;
    /** day format in section title. Formatting values: http://arshaw.com/xdate/#Formatting */
    dayFormat?: string;
    /** a function to custom format the section header's title */
    dayFormatter?: (arg0: string) => string;
    /** whether to use moment.js for date string formatting
     * (remember to pass 'dayFormat' with appropriate format, like 'dddd, MMM D') */
    useMoment?: boolean;
    /** whether to mark today's title with the "Today, ..." string. Default = true */
    markToday?: boolean;
    /** style passed to the section view */
    sectionStyle?: ViewStyle;
    /** whether to block the date change in calendar (and calendar context provider) when agenda scrolls */
    avoidDateUpdates?: boolean;
    /** offset scroll to section */
    viewOffset?: number;
    /** enable scrolling the agenda list to the next date with content when pressing a day without content */
    scrollToNextEvent?: boolean;
    /**
     * @experimental
     * If defined, uses InfiniteList instead of SectionList. This feature is experimental and subject to change.
     */
    infiniteListProps?: {
        itemHeight?: number;
        titleHeight?: number;
        visibleIndicesChangedDebounce?: number;
        renderFooter?: () => React.ReactElement | null;
        style?: StyleProp<ViewStyle>;
    };
}
/**
 * @description: AgendaList component
 * @note: Should be wrapped with 'CalendarProvider'
 * @extends: SectionList
 * @example: https://github.com/wix/react-native-calendars/blob/master/example/src/screens/expandableCalendar.js
 */
declare const AgendaList: {
    (props: AgendaListProps): React.JSX.Element;
    displayName: string;
    propTypes: {
        dayFormat: PropTypes.Requireable<string>;
        dayFormatter: PropTypes.Requireable<(...args: any[]) => any>;
        useMoment: PropTypes.Requireable<boolean>;
        markToday: PropTypes.Requireable<boolean>;
        sectionStyle: PropTypes.Requireable<NonNullable<number | object | null | undefined>>;
        avoidDateUpdates: PropTypes.Requireable<boolean>;
    };
};
interface AgendaSectionHeaderProps {
    title?: string;
    onLayout?: TextProps['onLayout'];
    style: TextProps['style'];
}
export declare const AgendaSectionHeader: React.MemoExoticComponent<(props: AgendaSectionHeaderProps) => React.JSX.Element>;
export default AgendaList;
