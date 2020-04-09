package com.zcc.commons.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * @author zcc
 */
public class TimeUtil {
    /**
     * ��ȡһ���µĵ�һ��
     *
     * @param date eg:2020-01
     * @return
     */
    public static Date getMonthFirstDay(String date) {
        DateFormat format = new SimpleDateFormat("yyyy-MM");
        Calendar instance = Calendar.getInstance();
        try {
            Date parse = format.parse(date);
            instance.setTime(parse);
            instance.add(Calendar.MONTH, 0);
            instance.set(Calendar.DAY_OF_MONTH, 1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return instance.getTime();
    }

    /**
     * ��ȡָ�����ڵļ�����ǰ�ĵ�һ��
     *
     * @param index
     * @param date
     * @return
     */
    public static String getBeforeMonthFirstDay(String date, int index) {
        return getDateStr("yyyy-MM-dd HH:mm:ss", getBeforeMonthFirstDaytoDate(date, index));
    }

    /**
     * ��ȡָ�����ڵļ�����ǰ�ĵ�һ��
     *
     * @param index
     * @param date  yyyy-MM
     * @return
     */
    public static Date getBeforeMonthFirstDaytoDate(String date, int index) {
        DateFormat format = new SimpleDateFormat("yyyy-MM");
        Calendar instance = Calendar.getInstance();
        try {
            Date parse = format.parse(date);
            instance.setTime(parse);
            instance.add(Calendar.MONTH, -index);
            instance.set(Calendar.DAY_OF_MONTH, 1);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return instance.getTime();
    }


    /**
     * ��ȡһ���µ����һ������һ��
     *
     * @param date eg:2020-01
     * @return 2020-01-31 23:59:59.999
     */
    public static Date getMonthEndDay(String date) {
        DateFormat format = new SimpleDateFormat("yyyy-MM");
        Calendar instance = Calendar.getInstance();
        try {
            Date parse = format.parse(date);
            instance.setTime(parse);
            instance.set(Calendar.DAY_OF_MONTH, instance.getActualMaximum(Calendar.DAY_OF_MONTH));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        long timeInMillis = instance.getTimeInMillis() + 86399999L;
        return new Date(timeInMillis);
    }

    /**
     * ��ȡָ�����ڼ�����ǰ�µ����һ��
     *
     * @param index ������ǰ
     * @param date
     * @return
     */
    public static Date getBeforeMonthEndDay(String date, int index) {
        DateFormat format = new SimpleDateFormat("yyyy-MM");
        Calendar instance = Calendar.getInstance();
        try {
            Date parse = format.parse(date);
            instance.setTime(parse);
            instance.set(Calendar.MONTH, instance.get(Calendar.MONTH) - index);
            instance.set(Calendar.DAY_OF_MONTH, instance.getActualMaximum(Calendar.DAY_OF_MONTH));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return new Date(instance.getTimeInMillis() + 86399999L);
    }

    /**
     * ��ȡָ����ʽ��ʱ���ַ�����ʽ
     *
     * @param format ʱ���ʽ
     * @param date   ʱ��
     * @return
     */
    public static String getDateStr(String format, Date date) {
        if (date == null) {
            date = new Date();
        }
        SimpleDateFormat formatter = new SimpleDateFormat(format);
        String dateStr = formatter.format(date);
        return dateStr;
    }

    /**
     * ��ȡָ�����ڵ�ǰ�����µĸ�ʽ����Ϣ
     *
     * @param date   ָ������ yyyy-MM
     * @param index  ������ǰ
     * @param format ָ����ʽ
     */
    public static List<String> getMonthBeforeFormat(String date, int index, String format) {
        List<String> dateList = new ArrayList<>(6);
        if (index == 0) {
            dateList.add(getDateStr(format, new Date()));
        }
        //������ǰ
        else if (index > 0) {
            for (int i = 0; i <= index; i++) {
                dateList.add(getDateStr(format, getBeforeMonthFirstDaytoDate(date, i)));
            }
        }
        //�����º�
        else {
            for (int i = index; i <= 0; i++) {
                dateList.add(getDateStr(format, getBeforeMonthFirstDaytoDate(date, i)));
            }
        }
        return dateList;
    }


    /**
     * ��ȡ��ȥn���ʱ��
     *
     * @param index
     * @return
     */
    public static Date getDayBefore(int index) {
        LocalDateTime now = LocalDateTime.now();
        now = now.minus(index, ChronoUnit.DAYS);
        return Date.from(now.atZone(ZoneId.systemDefault()).toInstant());
    }
}
