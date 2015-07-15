#Remote door: GET /accounts/{accountId}/vehicles/{vin}/remote-door
###Implementation Notes


Retrieve the status of last executed Remote Door service request. This request should only be used if the Service Request ID for the last request is unknown.
It is recommended to disallow additional requests while the status is PENDING.
The response will be empty if Remote Door Service has never been requested for this vehicle.


####Request body
```javascript
{
  serviceType(string) = [REMOTE_DOOR_LOCK, REMOTE_DOOR_UNLOCK],
  serviceRequestId(string) = [UUID],
  status(string) = [SUCCESS, PENDING, SCHEDULED, FAILED, CANCELLATION_SUCCESS, CANCELLATION_FAILED],
  statusChangeDateTime(string),
  description(string, optional) = [Door ajar, Door already locked]
}

```