#Event Types
event_types = ["Birthday", "Mother's Day", "Father's Day", "Retirement", "Pregnancy", "Congratulations", "Engagement", "Sorry", "Valentine's Day", "Graduation", "Get Well Soon", "Thank You", "Anniversary"]
event_types.each do |event_type|
  EventType.create(name: event_type)
end
