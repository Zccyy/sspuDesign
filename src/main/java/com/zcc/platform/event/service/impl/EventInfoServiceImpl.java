package com.zcc.platform.event.service.impl;

import com.zcc.commons.utils.ConstUtil;
import com.zcc.commons.utils.DateFormat;
import com.zcc.commons.utils.Page;
import com.zcc.commons.utils.StringUtil;
import com.zcc.manager.tagmanager.entity.TagObjectRelationEntity;
import com.zcc.manager.tagmanager.service.TagObjectRelationService;
import com.zcc.manager.usermanager.entity.UserInfoEntity;
import com.zcc.platform.event.dao.EventInfoDao;
import com.zcc.platform.event.dao.EventRelationDao;
import com.zcc.platform.event.entity.EventInfoEntity;
import com.zcc.platform.event.entity.EventRelationEntity;
import com.zcc.platform.event.service.EventInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @author zcc
 */
@Service("eventInfoService")
public class EventInfoServiceImpl implements EventInfoService {

    @Autowired
    private EventInfoDao eventInfoDao;
    @Autowired
    private EventRelationDao eventRelationDao;
    @Autowired
    private TagObjectRelationService tagObjectRelationService;

    /**
     * 保存事件
     *
     * @param eventInfoEntity eventInfoEntity
     * @return id
     */
    @Override
    public String save(EventInfoEntity eventInfoEntity, HttpServletRequest request, String tags, String linkPersonNos, String linkUnitNos, String linkEventNos) {
        UserInfoEntity currentPerson = ConstUtil.currentPerson(request);
        if (StringUtil.isValidStr(eventInfoEntity.getEventId())) {
            eventInfoEntity.setUpdateUserAccount(currentPerson.getUserName());
            eventInfoEntity.setUpdateTime(new Date());
            eventInfoDao.update(eventInfoEntity);

        } else {
            eventInfoEntity.setCreateTime(new Date());
            eventInfoEntity.setUpdateTime(new Date());
            eventInfoEntity.setCreateUserAccount(currentPerson.getUserName());
            eventInfoEntity.setUpdateUserAccount(currentPerson.getUserName());
            eventInfoDao.add(eventInfoEntity);
        }
        //事件打标签
        if (StringUtil.isValidStr(tags)) {
            String[] split = tags.split(",");
            for (String s : split) {
                TagObjectRelationEntity tagObjectRelationEntity = new TagObjectRelationEntity();
                tagObjectRelationEntity.setTagId(s);
                tagObjectRelationEntity.setObjectId(eventInfoEntity.getEventId());
                tagObjectRelationEntity.setObjectType(ConstUtil.EVENT_TAG);
                tagObjectRelationEntity.setIsDelete("0");
                tagObjectRelationService.addTagForObject(tagObjectRelationEntity);
            }
        }
        //添加事件关联人员
        if (StringUtil.isValidStr(linkPersonNos)) {
            String[] split = linkPersonNos.split(",");
            for (String s : split) {
                EventRelationEntity eventRelationEntity = new EventRelationEntity();
                eventRelationEntity.setEventId(eventInfoEntity.getEventId());
                eventRelationEntity.setObjectId(s);
                eventRelationEntity.setObjectType(EventRelationEntity.OBJECT_TYPE_PERSON);
                eventRelationEntity.setIsDelete("0");
                this.addEventRelationObject(eventRelationEntity);
            }
        }
        //添加事件关联单位
        if (StringUtil.isValidStr(linkUnitNos)) {
            String[] split = linkUnitNos.split(",");
            for (String s : split) {
                EventRelationEntity eventRelationEntity = new EventRelationEntity();
                eventRelationEntity.setEventId(eventInfoEntity.getEventId());
                eventRelationEntity.setObjectId(s);
                eventRelationEntity.setObjectType(EventRelationEntity.OBJECT_TYPE_UNIT);
                eventRelationEntity.setIsDelete("0");
                this.addEventRelationObject(eventRelationEntity);
            }
        }
        //添加事件关联对象
        if (StringUtil.isValidStr(linkEventNos)) {
            String[] split = linkEventNos.split(",");
            for (String s : split) {
                EventRelationEntity eventRelationEntity = new EventRelationEntity();
                eventRelationEntity.setEventId(eventInfoEntity.getEventId());
                eventRelationEntity.setObjectId(s);
                eventRelationEntity.setObjectType(EventRelationEntity.OBJECT_TYPE_EVENT);
                eventRelationEntity.setIsDelete("0");
                this.addEventRelationObject(eventRelationEntity);
            }
        }

        return eventInfoEntity.getEventId();
    }

    /**
     * 删除事件
     *
     * @param eventId id
     */
    @Override
    public void del(String eventId, HttpServletRequest request) {
        UserInfoEntity currentPerson = ConstUtil.currentPerson(request);
        eventInfoDao.del(eventId, DateFormat.dataFormat(new Date(), DateFormat.YYYY_MM_DD_HH_MM_SS), currentPerson.getUserName());
    }

    /**
     * 查找
     *
     * @return list
     */
    @Override
    public List<EventInfoEntity> findAll() {
        return eventInfoDao.findAll();
    }

    /**
     * 根据id查找事件
     *
     * @param eventId eventId
     * @return EventInfoEntity
     */
    @Override
    public EventInfoEntity find(String eventId) {
        return eventInfoDao.findById(eventId);
    }

    /**
     * 查找事件
     *
     * @param map  map
     * @param page page
     * @return list
     */
    @Override
    public List<EventInfoEntity> find(Map<String, Object> map, Page page) {

        if (StringUtil.isValidStr(StringUtil.safeToString(map.get("occurredTime")))) {
            map.put("beginTime", StringUtil.safeToString(map.get("occurredTime")).substring(0, 10));
            map.put("endTime", StringUtil.safeToString(map.get("occurredTime")).substring(StringUtil.safeToString(map.get("occurredTime")).length() - 10));
        }
        if (StringUtil.isValidStr(StringUtil.safeToString(map.get("settlementTime")))) {
            map.put("beginTime", StringUtil.safeToString(map.get("settlementTime")).substring(0, 10));
            map.put("endTime", StringUtil.safeToString(map.get("settlementTime")).substring(StringUtil.safeToString(map.get("occurredTime")).length() - 10));
        }
        return eventInfoDao.findByParamWithPage(map, page);
    }

    /**
     * 查找事件
     *
     * @param map map
     * @return list
     */
    @Override
    public List<EventInfoEntity> find(Map<String, Object> map) {
        if (StringUtil.isValidStr(StringUtil.safeToString(map.get("occurredTime")))) {
            map.put("beginTime", StringUtil.safeToString(map.get("occurredTime")).substring(0, 10));
            map.put("endTime", StringUtil.safeToString(map.get("occurredTime")).substring(StringUtil.safeToString(map.get("occurredTime")).length() - 10));
        }
        if (StringUtil.isValidStr(StringUtil.safeToString(map.get("settlementTime")))) {
            map.put("beginTime", StringUtil.safeToString(map.get("settlementTime")).substring(0, 10));
            map.put("endTime", StringUtil.safeToString(map.get("settlementTime")).substring(StringUtil.safeToString(map.get("occurredTime")).length() - 10));
        }
        return eventInfoDao.findByParam(map);
    }

    /**
     * 添加事件关联对象
     *
     * @param eventRelationEntity eventRelationEntity
     * @return id
     */
    @Override
    public String addEventRelationObject(EventRelationEntity eventRelationEntity) {
        EventRelationEntity byEventIdAndObjectId = eventRelationDao.findByEventIdAndObjectId(eventRelationEntity.getEventId(), eventRelationEntity.getObjectId());
        if (byEventIdAndObjectId == null) {
            eventRelationDao.addEventRelationObject(eventRelationEntity);
        } else {
            if (StringUtil.isValidStr(byEventIdAndObjectId.getRelationName())) {
                eventRelationEntity.setRelationName(eventRelationEntity.getRelationName() + ";" + byEventIdAndObjectId.getRelationName());
            }
            eventRelationDao.updateEventRelationObject(eventRelationEntity.getEventId(), eventRelationEntity.getObjectId());
        }
        return eventRelationEntity.getEventId();
    }

    /**
     * 删除事件关联对象
     *
     * @param eventId  eventId
     * @param objectId objectId
     */
    @Override
    public void delEventRelationObject(String eventId, String objectId) {
        eventRelationDao.delEventRelationObject(eventId, objectId);
    }

    /**
     * 单个事件的数据聚合,分页
     *
     * @param eventId eventId
     * @param page    page
     * @return list
     */
    @Override
    public List<EventInfoEntity> findDataTogether(String eventId, Page page) {
        return eventInfoDao.findDataTogetherByIdWithPage(eventId, page);
    }

    /**
     * 单个事件的所有数据聚合
     *
     * @param eventId eventId
     * @return list
     */
    @Override
    public List<EventInfoEntity> findDataTogether(String eventId) {
        return eventInfoDao.findDataTogetherById(eventId);
    }

    /**
     * 所有事件的数据聚合、分页
     *
     * @param page page
     * @return list
     */
    @Override
    public List<EventInfoEntity> findDataTogether(Page page) {
        return eventInfoDao.findAllDataTogetherWithPage(page);
    }

    /**
     * 所有事件的数据聚合
     *
     * @return list
     */
    @Override
    public List<EventInfoEntity> findDataTogether() {
        return eventInfoDao.findAllDataTogether();
    }
}
